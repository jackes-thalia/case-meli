'use client'

import React from 'react'
import MainTemplate from '@/presentation/container/MainTemplate'
import Card from '@/presentation/components/Card/Card'
import TokenLogin from './components/TokenLogin/TokenLogin'
import EmailLogin from './components/EmailLogin/EmailLogin'
import { useRouter } from 'next/navigation'

const Home = () => {
  const [step, setStep] = React.useState<number>(1)
  const router = useRouter()

  const nextStep = () => {
    if (step === 2) {
      // TODO: save user and redirect to dashboard
      console.log('redirect')
      router.push('/dashboard')
    }
    setStep((s) => s + 1)
  }

  const renderStep = () => {
    const steps: { [key: number]: () => React.JSX.Element } = {
      1: () => <EmailLogin nextStep={nextStep} />,
      2: () => <TokenLogin nextStep={nextStep} />,
    }
    return steps[step] ? steps[step]() : null
  }

  return (
    <MainTemplate>
      <Card size="large">{renderStep()}</Card>
    </MainTemplate>
  )
}

export default Home
