import { z } from 'zod'

export type SignInFormData = z.infer<typeof authSchema>

export const authSchema = z.object({
  email: z.string().nonempty('Email obrigatório!').email('Email inválido!'),
  password: z
    .string()
    .nonempty('Senha obrigatória!')
    .min(6, 'Precisa ter no mínimo 6 caracteres!'),
})
