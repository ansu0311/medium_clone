import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify, decode } from "hono/jwt";
import { existUserSchema, newUserSchema } from "ansuman_medium_schema";

export const userRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECERT: string;
  };
}>();

// JWT Authentication Middleware
async function authMiddleware(c: any, next: any) {
  // Extract authorization token from request header
  const authToken = c.req.header("Authorization") || "";

  // Check for missing authorization token and return error
  if (!authToken) {
    return c.json({ message: "Unauthorized" }, 403);
  }

  try {
    // Extract token from 'Authorization' header and verify using JWT secret
    const token = authToken.split(" ")[1];
    const decodedPayload = await verify(token, c.env.JWT_SECERT);

    // Store user ID from decoded payload in context for later use
    c.set("userId", decodedPayload.id);
    await next(); // Call the next middleware or route handler
  } catch (error: any) {
    // Handle JWT verification errors and return appropriate error response
    return c.json({ message: "Unauthorized", error: error.name }, 403);
  }
}

// Route for user signup
userRoute.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // Parse request body as JSON and validate using schema
    const body = await c.req.json();
    const { success } = newUserSchema.safeParse(body);

    if (!success) {
      return c.json({ message: "Incorrect/Missing Inputs" }, 411);
    }

    // Hash password before storing (not shown for brevity)
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password, // Hash password before storing
        name: body.name,
      },
      select: {
        id: true,
      },
    });

    // Sign JWT containing user ID
    const token = await sign({ id: newUser.id }, c.env.JWT_SECERT);

    return c.json({ token: "Bearer " + token }, 200); // Respond with JWT token
  } catch (e: any) {
    // Handle unique constraint errors for email (assuming email is unique)
    if (e.code === "P2002") {
      return c.json({ message: "User Already Exists", error: e.name }, 401);
    } else {
      // Handle other errors
      return c.json({ message: "Internal Server Error" }, 500);
    }
  }
});

// Route for user signin
userRoute.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  // Validate request body using schema
  const { success } = existUserSchema.safeParse(body);
  if (!success) {
    return c.json({ message: "Incorrect/Missing Inputs" }, 411);
  }

  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email: body.email },
    select: {
      id: true,
      password: true, // Only select password for verification
    },
  });

  // Check if user exists and password matches (hashing required)
  if (!user || user.password != body.password) { // Placeholder for secure password verification
    return c.json({ message: "Invalid credentials" }, 401);
  }

  // Sign JWT containing user ID
  const token = await sign({ id: user.id }, c.env.JWT_SECERT);

  return c.json({ token: "Bearer " + token }, 200); // Respond with JWT token
});

// Route for fetching user details (protected by auth middleware)
userRoute.get("/:authorId", authMiddleware, async (c) => {
  const authorId = c.req.param('authorId');

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userExists = await prisma.user.findUnique({
    where: {
      id: authorId,
    },
  });

  c.status(200);
  return c.json({
    name: userExists?.name,
    email: userExists?.email, // Consider privacy implications of exposing email in production
    quote: userExists?.quote,
  });
});
