"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existBlogSchema = exports.newBlogSchema = exports.existUserSchema = exports.newUserSchema = void 0;
const zod_1 = require("zod");
exports.newUserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional()
});
exports.existUserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.newBlogSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
exports.existBlogSchema = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
