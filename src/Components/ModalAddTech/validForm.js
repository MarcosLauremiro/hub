import {z} from 'zod'

export const formAddTech = z.object({
    title: z.string().min(2, 'Não abevie o nome'),
    status: z.string().min(3, 'selecione um nivel valido'),
})