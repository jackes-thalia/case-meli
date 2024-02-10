import { StepContext } from '@/presentation/providers/StepProvider'
import { Stepper, Step, StepLabel } from '@mui/material'
import React, { useContext } from 'react'
import { StyledStepper } from './Stepper.styles'

const StepComponent = () => {
  const { activeStep, showStep } = useContext(StepContext)

  const steps = [
    { label: 'Buscar' },
    { label: 'Dados' },
    { label: 'Evidências' },
    { label: 'Resumo' },
  ]

  return (
    <StyledStepper showStep={showStep}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((nameStep) => {
          return (
            <Step key={nameStep.label}>
              <StepLabel>{nameStep.label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </StyledStepper>
  )
}

export default StepComponent
