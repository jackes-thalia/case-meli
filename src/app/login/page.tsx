'use client'

import React from 'react'
import MainTemplate from '@/presentation/container/MainTemplate'
import Card from '@/presentation/components/Card/Card'
import { Button, TextField } from '@mui/material'
import { redirect } from 'next/navigation'

const Home = () => {
  const [step, setStep] = React.useState<number>(1)

  const emailSection = () => {
    return (
      <Card>
        <h2>Olá! Informe seu e-mail Meli para solicitar uma ocorrência</h2>
        <label>Digite o email:</label>
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
  const tokenSection = () => {
    return (
      <Card>
        <h2>Agora, Informe o token que enviamos para o seu e-mail</h2>
        <label>Digite o token:</label>
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
      1: emailSection,
      2: tokenSection,
    }
    return steps[step]() || null
  }
  const nextStep = () => {
    if (step === 2) {
      // TODO: save user and redirect to dashboard
      console.log('redirect')
      redirect('/dashboard')
    }
    setStep((s) => s + 1)
  }
  return <MainTemplate>{renderStep()}</MainTemplate>
}

export default Home
