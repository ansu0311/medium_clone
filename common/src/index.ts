import { z } from "zod";

export const newUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
});

export const existUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const newBlogSchema = z.object({
    title: z.string(),
    description: z.string(),
})

export const existBlogSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
})

export type NewUserSchema = z.infer<typeof newUserSchema>
export type ExistUserSchema = z.infer<typeof existUserSchema>
export type NewBlogSchema = z.infer<typeof newBlogSchema>
export type ExistBlogSchema = z.infer<typeof existBlogSchema>