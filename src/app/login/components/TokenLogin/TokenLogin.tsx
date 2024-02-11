import { Button, TextField } from '@mui/material'
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
      <h2>Agora, Informe o token que enviamos para o seu e-mail</h2>
      <label data-error={!!errors.token}>Digite o token:</label>
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