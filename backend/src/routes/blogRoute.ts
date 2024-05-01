import { Hono } from "hono"; // Import Hono module from hono
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt"; // Import verify module from hono/jwt
import { existBlogSchema, newBlogSchema } from "ansuman_medium_schema"; // Import Datatype

// Define environment variable types for better type safety
export const blogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECERT: string;
  };
  Variables: {
    userId: string;
  };
}>();

// Middleware for JWT authentication
blogRoute.use(async (c, next) => {
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
  } catch (error) {
    // Handle JWT verification errors and return appropriate error response
    return c.json({ message: "Unauthorized" }, 403);
  }
});

// Route for creating a new blog post
blogRoute.post("/", async (c) => {
  const userId = c.get("userId"); // Retrieve user ID from context

  // Create Prisma client instance with database URL
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // Parse request body as JSON and validate using schema
  const body = await c.req.json();
  const { success } = newBlogSchema.safeParse(body);

  if (!success) {
    return c.json({ message: "Incorrect/Missing Inputs" }, 411); // Send error for invalid request data
  }

  // Create a new post using Prisma with validated data and user ID
  const post = await prisma.post.create({
    data: {
      title: body.title,
      description: body.description,
      authorId: userId,
    },
  });

  return c.json({ id: post.id }); // Respond with newly created post ID
});

// Route for updating a blog post
blogRoute.put("/", async (c) => {
  const userId = c.get("userId"); // Retrieve user ID from context

  // Create Prisma client instance with database URL
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // Parse request body as JSON and validate using schema
  const body = await c.req.json();
  const { success } = existBlogSchema.safeParse(body);

  if (!success) {
    return c.json({ message: "Incorrect/Missing Inputs" }, 411); // Send error for invalid request data
  }

  const today = new Date();

  // Update a post by ID, ensuring it belongs to the authenticated user
  const updatedPost = await prisma.post.update({
    where: {
      id: body.id,
      authorId: userId,
    },
    data: {
      title: body.title,
      description: body.description,
      dateCreated: today,
    },
  });

  return c.json({ id: updatedPost.id, message: "Post updated successfully" });
});

// Route for fetching all blog posts
blogRoute.get("/bulk", async (c) => {
  // Create Prisma client instance with database URL
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // Fetch all posts and select specific fields, including only `name` from the author
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      dateCreated: true,
      author: {
        select: {
          name: true, // Include only the author's name
        },
      },
    },
  });

  return c.json(posts);
});

// Route for fetching a single blog post
blogRoute.get("/:id", async (c) => {
  try {
    const id = c.req.param("id"); // Extract post ID from URL parameter

    // Create Prisma client instance with database URL
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    // Fetch a single post by ID and select specific fields, including author details
    const post = await prisma.post.findUnique({
      where: {
        id, // Use destructuring for cleaner syntax
      },
      select: {
        authorId: true,
        title: true,
        description: true,
        dateCreated: true,
        author: {
          select: {
            name: true,
            quote: true, // Consider privacy implications of exposing author quote
          },
        },
      },
    });

    if (!post) {
      return c.json({ message: "Post not found" }, 404); // Handle non-existent post
    }

    return c.json(post);
  } catch (error) {
    return c.json({ message: "Internal Server Error"}, 500); // Handle internal errors
  }
});
