import {z} from 'zod'

export const formLogin = z.object({
    email: z.string().min(1, 'e-mail ou senha incorretos').email(),
    password:z.string().min(1, 'e-mail ou senha incorretos'),
})