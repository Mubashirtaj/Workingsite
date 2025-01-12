import z from 'zod'

export const messageschema = z.object({
    content:z.string().min(10,{message:"Content must be at least of 10 character"}).max(300,"Content must be not than of 300 character")
})