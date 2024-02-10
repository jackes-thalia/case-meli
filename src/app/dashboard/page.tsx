'use client'

import Card from '@/presentation/components/Card/Card'
import StepComponent from '@/presentation/components/Stepper/Stepper'
import MainTemplate from '@/presentation/container/MainTemplate'
import { StepContext } from '@/presentation/providers/StepProvider'
import React from 'react'
import FirtStep from './components/FirstStep/FirstStep'
import SecondStep from './components/FirstStep/LocationModal/LocationModal'

const Dashboard = () => {
  const { activeStep } = React.useContext(StepContext)

  const renderStep = () => {
    const steps: { [key: number]: () => React.JSX.Element } = {
      0: FirtStep,
      1: SecondStep,
      2: FirtStep,
    }

    return steps[activeStep] ? steps[activeStep]() : null
  }

  return (
    <MainTemplate>
      <Card size="large">
        <StepComponent />
        {renderStep()}
      </Card>
    </MainTemplate>
  )
}

export default Dashboard
