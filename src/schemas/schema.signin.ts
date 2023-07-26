import { z } from 'zod'

export type SignInFormData = z.infer<typeof signInSchema>

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty('O email é obrigatório.')
    .email('Formato de email inválido.'),
  password: z
    .string()
    .nonempty('A senha é obrigatória.')
    .min(6, 'A senha deve conter no mínimo 6 caracteres.'),
})
