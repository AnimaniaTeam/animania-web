import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  })
  .required()
