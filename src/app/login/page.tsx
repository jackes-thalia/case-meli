'use client'
import MainTemplate from '@/presentation/container/MainTemplate'
import Card from '@/presentation/components/Card/Card'
import { Button, TextField } from '@mui/material'

export const Home = () => {
  return (
    <MainTemplate>
      <Card>
        <h2>Olá! Informe seu e-mail Meli para solicitar uma ocorrência</h2>
        <label>Digite o email:</label>
        <TextField
          id="input-email"
          name="email"
          type="email"
          variant="outlined"
        />
        <Button sx={{ mt: 5 }} size="large" variant="contained">
          Continuar
        </Button>
      </Card>
    </MainTemplate>
  )
}

export default Home
