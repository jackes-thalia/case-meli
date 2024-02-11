import { StepContext } from '@/presentation/providers/StepProvider'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import { Stepper, Step, StepLabel, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { StyledStepper } from './Stepper.styles'

const StepComponent = () => {
  const { activeStep, showStep, previousStep } = useContext(StepContext)

  const steps = [
    { label: 'Buscar' },
    { label: 'Dados' },
    { label: 'Evidências' },
    { label: 'Resumo' },
  ]

  const backBtn = () => {
    if (activeStep === 0) {
      return null
    }
    return (
      <IconButton
        aria-label="voltar"
        onClick={previousStep}
        className="back-btn"
      >
        <ArrowBackIosNewOutlinedIcon color="action" />
      </IconButton>
    )
  }

  return (
    <StyledStepper $showStep={showStep}>
      {backBtn()}
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
