'use client'

import React from 'react'
import { Input } from '@mui/material'
import { StyledSecondStep } from './SecondStep.styles'

const SecondStep = () => {
  const occurrenceData = [
    { label: 'CEP:' },
    { label: 'Endereço' },
    { label: 'Cidade' },
    { label: 'Estado:' },
    { label: 'Numero:' },
  ]

  return (
    <StyledSecondStep>
      <h2>Dados da ocorrência</h2>

      <section className="cep-data">
        {occurrenceData.map((item, index) => (
          <div key={index}>
            <div className="label">{item.label}</div>
            <Input />
          </div>
        ))}
      </section>
    </StyledSecondStep>
  )
}

export default SecondStep
