import { emailValidationSchema } from '@/app/login/components/validation/LoginValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { StyledEmailLogin } from './EmailLogin.styles'

type EmailLoginProps = {
  nextStep: () => void
}

const EmailLogin = ({ nextStep }: EmailLoginProps) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(emailValidationSchema),
  })

  const onSubmit = () => {
    nextStep()
  }

  return (
    <StyledEmailLogin onSubmit={handleSubmit(onSubmit)}>
      <h2>Olá! Informe seu e-mail Meli para solicitar uma ocorrência</h2>
      <label data-error={!!errors.email}>Digite o email:</label>
      <TextField
        {...register('email')}
        id="input-email"
        type="email"
        variant="outlined"
        placeholder="Digite aqui o seu e-mail"
        helperText={errors.email?.message}
        error={!!errors.email}
        onBlur={() => trigger('email')}
      />
      <Button
        disabled={!isValid}
        sx={{ mt: 5 }}
        size="large"
        variant="contained"
        type="submit"
      >
        Continuar
      </Button>
    </StyledEmailLogin>
  )
}

export default EmailLogin
