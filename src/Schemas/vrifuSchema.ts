import z from 'zod'

export const verifyschema = z.object({
    code: z.string().length(6, 'code is 6 digit')
})
export const verifyschema2 = z.object({
    code: z.string().length(6, 'code is 6 digit')
})

