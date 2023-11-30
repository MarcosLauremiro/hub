import {z} from 'zod'

export const formEdit = z.object({
    status: z.string()
})