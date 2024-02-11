import * as Yup from 'yup'

export const firstStepValidationSchema = Yup.object({
  cep: Yup.string()
    .matches(/^\d{8}$/, 'O campo deve ter 8 dígitos')
    .required('O campo é obrigatório'),
}).required()

export const secondStepValidationSchema = Yup.object({
  title: Yup.string().required('O título é obrigatório'),
  name: Yup.string().required('O nome do relator é obrigatório'),
  startDate: Yup.string().required('A data da ocorrência é obrigatório'),
  endDate: Yup.string(),
  description: Yup.string().required('O campo é obrigatório'),
})
