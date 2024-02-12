import { emailValidationSchema } from '@/app/login/components/validation/LoginValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField, Typography } from '@mui/material'
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
      <Typography variant="h2" component="h2" sx={{ mb: 7 }}>
        Olá! Informe seu e-mail Meli para solicitar uma ocorrência
      </Typography>
      <Typography
        sx={{ mb: 2, mt: 6 }}
        data-error={!!errors.email}
        component="label"
        variant="caption"
      >
        Digite o email:
      </Typography>
      <TextField
        {...register('email')}
        id="input-email"
        type="email"
        variant="outlined"
        placeholder="Digite o seu e-mail aqui"
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
