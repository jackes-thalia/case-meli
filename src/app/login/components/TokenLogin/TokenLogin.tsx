import { Button, TextField, Typography } from '@mui/material'
import { StyledTokenLogin } from './TokenLogin.styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { tokenValidationSchema } from '../validation/LoginValidation'
import { useForm } from 'react-hook-form'

type TokenProps = {
  nextStep: () => void
}

const TokenLogin = ({ nextStep }: TokenProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: yupResolver(tokenValidationSchema),
  })

  const onSubmit = () => {
    nextStep()
  }

  return (
    <StyledTokenLogin onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h2" component="h2" sx={{ mb: 7 }}>
        Agora, Informe o token que enviamos para o seu e-mail
      </Typography>
      <Typography
        variant="caption"
        data-error={!!errors.token}
        sx={{ mb: 2, mt: 6 }}
      >
        Digite o token:
      </Typography>
      <TextField
        {...register('token')}
        id="input-token"
        type="text"
        variant="outlined"
        error={!!errors.token}
        helperText={errors.token?.message}
        onBlur={() => trigger('token')}
      />
      <Button
        disabled={!isValid}
        sx={{ mt: 5 }}
        size="large"
        variant="contained"
        onClick={nextStep}
      >
        Continuar
      </Button>
    </StyledTokenLogin>
  )
}

export default TokenLogin
