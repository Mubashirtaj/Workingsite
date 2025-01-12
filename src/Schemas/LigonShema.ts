import z from 'zod'

export const signInSchema = z.object({

    identifier: z.string().email({ message: "Please enter valid email" }),
    password: z.string().min(6, "Password must be atlest 6 character")
})