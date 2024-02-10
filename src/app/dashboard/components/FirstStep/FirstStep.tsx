'use client'

import React from 'react'
import { StepContext } from '@/presentation/providers/StepProvider'
import { Button, TextField } from '@mui/material'
import { StyledFirstStep } from './FirstStep.styles'

const FirtStep = () => {
  const { nextStep } = React.useContext(StepContext)

  return (
    <StyledFirstStep>
      <h2>Solicitar ocorrência</h2>
      <p>Forneça detalhes da sua ocorrência</p>
      <label>Digite o CEP do centro de distribuição:</label>
      <TextField
        id="input-email"
        name="email"
        type="email"
        variant="outlined"
      />
      <Button
        sx={{ mt: 5 }}
        size="large"
        variant="contained"
        onClick={nextStep}
      >
        Continuar
      </Button>
    </StyledFirstStep>
  )
}

export default FirtStep
