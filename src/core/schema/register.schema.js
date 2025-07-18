import z from "zod";

export const registerSchema = z.object({

    name: z.string().min(1, { message: "Please Enter Your Name!" }),
    email: z.string().email({ message: "Please Enter Your Email!" }),
    country_code: z.enum(["+91", "+92", "+93"], {
        errorMap: () => ({ message: "Please Select Your Country Code!" })
    }),
    phone: z.string().min(1).max(10, { message: "Enter valid mobile number!" }),
    password: z.string().min(6, { message: "Please Enter Your Password!" }),
    terms: z.literal(true, {
        errorMap: () => ({ message: "You must accept the terms and conditions." })
    }),


})