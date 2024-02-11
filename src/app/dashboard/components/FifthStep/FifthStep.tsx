'use client'

import React from 'react'
import { Button } from '@mui/material'
import { StyledFifthStep } from './FifthStep.styles'
import { redirect } from 'next/navigation'
import { StepContext } from '@/presentation/providers/StepProvider'

const FifthStep = () => {
  const { resetStepper, hideStepper, showStepper } =
    React.useContext(StepContext)

  React.useEffect(() => {
    hideStepper()
    return () => {
      showStepper()
    }
  }, [hideStepper, showStepper])

  const redirectToSolicitations = () => {
    redirect('/solicitations')
  }
  const newSolicitation = () => {
    resetStepper()
  }
  return (
    <>
      <StyledFifthStep>
        <h2>Sua ocorrência foi enviada com sucesso!</h2>
        <Button
          sx={{ mt: 10 }}
          size="large"
          variant="contained"
          onClick={redirectToSolicitations}
        >
          Acompanhar solicitação
        </Button>
        <Button
          sx={{ mt: 5 }}
          size="large"
          variant="outlined"
          color="info"
          onClick={() => newSolicitation()}
        >
          Fazer nova solicitação
        </Button>
      </StyledFifthStep>
    </>
  )
}

export default FifthStep