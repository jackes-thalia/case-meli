import { StepContext } from '@/presentation/providers/StepProvider'
import { Stepper, Step, StepLabel } from '@mui/material'
import React, { useContext } from 'react'

const StepComponent = () => {
  const { activeStep } = useContext(StepContext)

  const steps = [
    { label: 'Buscar' },
    { label: 'Dados' },
    { label: 'Evidências' },
    { label: 'Resumo' },
  ]

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((nameStep) => {
          return (
            <Step key={nameStep.label}>
              <StepLabel>{nameStep.label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </div>
  )
}

export default StepComponent
