import { z } from "zod";
export declare const newUserSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const existUserSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const newBlogSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
}, {
    title: string;
    description: string;
}>;
export declare const existBlogSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    id: string;
}, {
    title: string;
    description: string;
    id: string;
}>;
export type NewUserSchema = z.infer<typeof newUserSchema>;
export type ExistUserSchema = z.infer<typeof existUserSchema>;
export type NewBlogSchema = z.infer<typeof newBlogSchema>;
export type ExistBlogSchema = z.infer<typeof existBlogSchema>;
