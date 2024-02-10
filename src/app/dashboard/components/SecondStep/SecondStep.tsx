'use client'

import React from 'react'
import { Button, TextField } from '@mui/material'
import { StyledSecondStep } from './SecondStep.styles'
import LocationInfo from '../LocationInfo/LocationInfo'
import { StepContext } from '@/presentation/providers/StepProvider'

const SecondStep = () => {
  const { nextStep } = React.useContext(StepContext)

  const occurrenceData = [
    { name: 'title', label: 'Título:', type: 'text' },
    { name: 'name', label: 'Nome do relator', type: 'text' },
    { name: 'occurrence-date', label: 'Data da ocorrência', type: 'date' },
    { name: 'closing-date', label: 'Data de encerramento:', type: 'date' },
    { name: 'description', label: 'Descrição:', type: 'text' },
  ]

  return (
    <StyledSecondStep>
      <LocationInfo />
      <h2>Dados da ocorrência</h2>

      <section className="occurrence-data">
        {occurrenceData.map((item, index) => (
          <div
            key={index}
            className={item.name === 'description' ? 'description' : ''}
          >
            <div className="label">{item.label}</div>
            <TextField
              id={`input-${item.name}`}
              name={`${item.name}`}
              type={`${item.type}`}
              variant="outlined"
              size="medium"
              fullWidth
              sx={{ mt: 3 }}
            />
          </div>
        ))}
      </section>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 6 }}
        onClick={nextStep}
      >
        Avançar
      </Button>
    </StyledSecondStep>
  )
}

export default SecondStep
