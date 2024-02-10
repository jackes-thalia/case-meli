'use client'

import React from 'react'

type StepContextData = {
  activeStep: number
  showStep: boolean
  nextStep: () => void
  previousStep: () => void
  hideStepper: () => void
  showStepper: () => void
}

export const StepContext = React.createContext<StepContextData>(
  {} as StepContextData,
)

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [showStep, setShowStep] = React.useState(true)

  const nextStep = () => {
    setActiveStep((currentStep) => currentStep + 1)
  }

  const previousStep = () => {
    setActiveStep((currentStep) => currentStep - 1)
  }

  const hideStepper = () => {
    setShowStep(false)
  }

  const showStepper = () => {
    setShowStep(true)
  }

  const value = {
    activeStep,
    showStep,
    nextStep,
    previousStep,
    hideStepper,
    showStepper,
  }

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>
}
