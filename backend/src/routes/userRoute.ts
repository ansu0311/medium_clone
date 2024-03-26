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

async function authMiddleware(c: any, next: any) {
  const authToken: string = c.req.header("Authorization") || "";

  if (authToken === "") {
    c.status(403);
    return c.json({
      message: "Unauthorized",
    });
  }
  try {
    const token = authToken.split(" ")[1];

    const decodedPayload = await verify(token, c.env.JWT_SECERT);
    c.set("userId", decodedPayload.id);
    await next();
  } catch (error:any) {
    c.status(403);
    return c.json({
      message: "Unauthorized",
      error: error.name,
    });
  }
}

userRoute.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();

    const { success } = newUserSchema.safeParse(body);

    if (!success) {
      c.status(411);
      return c.json({
        message: "Incorrect/Missing Inputs",
      });
    }

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
      select: {
        id: true,
      },
    });

    const token = await sign({ id: newUser.id }, c.env.JWT_SECERT);

    c.status(200);
    return c.json({
      token: "Bearer " + token,
    });
  } catch (e:any) {
    c.status(401);
    return c.json({
      message: "User Already Exists",
      error: e.name,
    });
  }
});

userRoute.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = existUserSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Incorrect/Missing Inputs",
    });
  }

  const existUser = await prisma.user.findUnique({
    where: { email: body.email, password: body.password },
    select: {
      id: true,
    },
  });

  if (!existUser) {
    c.status(401);
    return c.json({
      message: "Invalid credentials",
    });
  }

  const token = await sign({ id: existUser.id }, c.env.JWT_SECERT);

  c.status(200);
  return c.json({
    token: "Bearer " + token,
  });
});

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
    email: userExists?.email,
    quote: userExists?.quote,
  });
});
