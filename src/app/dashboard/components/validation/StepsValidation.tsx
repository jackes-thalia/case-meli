import * as Yup from 'yup'

export const firstStepValidationSchema = Yup.object({
  cep: Yup.string()
    .matches(/^\d{8}$/, 'O campo deve ter 8 dígitos')
    .required('O campo é obrigatório'),
}).required()
