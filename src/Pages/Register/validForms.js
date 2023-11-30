import {z} from 'zod'

export const formRegister = z.object({
    email: z.string().min(1, 'O e-mail é obrigatório').email(),
    password:z.string().min(8, 'Pelo menos 8 caracters')
    .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
    .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
    .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número'),
    name: z.string().min(3, 'Digite um nome valido'),
    bio: z.string().min(4, 'Fale mais sobre você'),
    contact: z.string().min(4, 'Passe um contato valido'),
    confirm: z.string().min(1, 'Confirmar senha é obrigatoria'),
    course_module: z.string(),
}).refine(({password, confirm}) => confirm === password, {
    menssage: 'A confirmação e a senha precisãm corresponder',
    path: ['confirm'],
})