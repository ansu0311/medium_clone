import { Hono } from "hono";
import { userRoute } from "./userRoute";
import { blogRoute } from "./blogRoute";

export const mainRoute = new Hono()

mainRoute.route('/user',userRoute)
mainRoute.route('/blog',blogRoute)