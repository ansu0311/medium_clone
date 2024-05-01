// Import necessary modules
import { Hono } from "hono";
import { userRoute } from "./userRoute"; // Import user route handler
import { blogRoute } from "./blogRoute";  // Import blog route handler

// Create a new Hono instance
export const mainRoute = new Hono();

// Mount user route handler onto '/user' path
mainRoute.route('/user', userRoute);

// Mount blog route handler onto '/blog' path
mainRoute.route('/blog', blogRoute);