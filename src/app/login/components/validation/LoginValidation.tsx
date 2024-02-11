import * as Yup from 'yup'

export const emailValidationSchema = Yup.object({
  email: Yup.string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
}).required()

export const tokenValidationSchema = Yup.object({
  token: Yup.string()
    .matches(/^\d{6}$/, 'O campo deve ter 6 dígitos')
    .required('O token é obrigatório'),
}).required()
