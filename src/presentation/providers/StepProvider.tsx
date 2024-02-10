'use client'

import React from 'react'

type StepContextData = {
  activeStep: number
  nextStep: () => void
  previousStep: () => void
}

export const StepContext = React.createContext<StepContextData>(
  {} as StepContextData,
)

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const nextStep = () => {
    setActiveStep((currentStep) => currentStep + 1)
  }

  const previousStep = () => {
    setActiveStep((currentStep) => currentStep - 1)
  }

  const value = {
    activeStep,
    nextStep,
    previousStep,
  }

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>
}
