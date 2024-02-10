'use client'

import Card from '@/presentation/components/Card/Card'
import StepComponent from '@/presentation/components/Stepper/Stepper'
import MainTemplate from '@/presentation/container/MainTemplate'
import { StepContext } from '@/presentation/providers/StepProvider'
import { Button, TextField } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  const { activeStep, nextStep } = React.useContext(StepContext)

  const firtStep = () => {
    return (
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
        <Button
          sx={{ mt: 5 }}
          size="large"
          variant="contained"
          onClick={nextStep}
        >
          Continuar
        </Button>
      </Card>
    )
  }

  const secondStep = () => {
    return (
      <Card>
        <h2>O step pegou caralho</h2>
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
      </Card>
    )
  }

  const renderStep = () => {
    const steps: { [key: number]: () => React.JSX.Element } = {
      0: firtStep,
      1: secondStep,
      2: firtStep,
    }

    return steps[activeStep] ? steps[activeStep]() : null
  }

  return (
    <MainTemplate>
      <Card>
        <StepComponent />
        {renderStep()}
      </Card>
    </MainTemplate>
  )
}

export default Dashboard
