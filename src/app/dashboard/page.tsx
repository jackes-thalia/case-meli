'use client'

import Card from '@/presentation/components/Card/Card'
import MainTemplate from '@/presentation/container/MainTemplate'
import { Button, TextField } from '@mui/material'

const Dashboard = () => {
  return (
    <MainTemplate>
      <Card>
        <h2>Solicitar ocorrência</h2>
        <p>Forneça detalhes da sua ocorrência</p>
        <label>Digite o CEP do centro de distribuição:</label>
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

export default Dashboard
