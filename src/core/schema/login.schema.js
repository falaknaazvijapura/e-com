import z from "zod";

export const loginSchema = z.object({

    email: z.string().email({ message: "Please Enter Your Email!" }),
    password: z.string().min(6, { message: "Please Enter Your Password!" }),


})