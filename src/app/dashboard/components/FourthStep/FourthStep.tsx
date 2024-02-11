'use client'

import React from 'react'
import { Button, Divider, Typography } from '@mui/material'
import { StyledFourthStep } from './FourthStep.styles'
import { StepContext } from '@/presentation/providers/StepProvider'

const FourthStep = () => {
  const { nextStep, hideStepper } = React.useContext(StepContext)
  const distributionCenterData = [
    { label: 'Nome:', value: 'Centro de distribuição' },
    { label: 'CEP:', value: '064451658' },
    { label: 'Endereço:', value: 'Av Barueri silva Av Barueri silva' },
    { label: 'Cidade:', value: 'Barueri' },
    { label: 'Estado:', value: 'São Paulo' },
  ]

  const occurrenceData = [
    { label: 'Título:', value: 'Problema com centro de distribuição' },
    { label: 'Nome do relator:', value: 'Thalia Jackes' },
    { label: 'Data da ocorrência:', value: '09/02/2024' },
    { label: 'Data de encerramento:', value: '09/02/2024' },
    {
      label: 'Upload de Evidências:',
      name: 'file',
      value: 'São Paulo.JPG, São Paulo.JPG',
    },
    {
      label: 'Descrição:',
      name: 'description',
      value:
        'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
    },
    {
      label: 'Observação:',
      name: 'comments',
      value: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ]

  const occurrenceContentClassName = (itemName: string) => {
    if (
      itemName === 'file' ||
      itemName === 'comments' ||
      itemName === 'description'
    ) {
      return 'description'
    }
    return ''
  }

  const createSolicitation = () => {
    // TODO: send to service
    hideStepper()
    nextStep()
  }

  return (
    <StyledFourthStep>
      <Typography variant="h2">Resumo da solicitação</Typography>
      <Typography variant="caption">
        Revise suas informações para encaminhar a ocorrência
      </Typography>

      <section className="distribution-center">
        <div className="resume-title">
          <Typography variant="body1">Centro de distribuição</Typography>
          <Typography variant="body1" color="primary">
            Editar
          </Typography>
        </div>

        <div className="distribution-content">
          {distributionCenterData.map((item, index) => {
            return (
              <div key={index}>
                <Typography variant="body1">{item.label}</Typography>
                <Typography variant="caption">{item.value}</Typography>
              </div>
            )
          })}
        </div>
      </section>

      <Divider sx={{ my: 5 }} />

      <section className="occurrence-data">
        <div className="resume-title">
          <Typography variant="body1">Dados da ocorrência</Typography>
          <Typography variant="body1" color="primary">
            Editar
          </Typography>
        </div>

        <div className="occurrence-content">
          {occurrenceData.map((item, index) => {
            return (
              <div
                key={index}
                className={occurrenceContentClassName(item.name || '')}
              >
                <Typography variant="body1">{item.label}</Typography>
                <Typography variant="caption">{item.value}</Typography>
              </div>
            )
          })}
        </div>
      </section>

      <Button
        variant="contained"
        size="large"
        sx={{ mt: 6 }}
        onClick={createSolicitation}
      >
        Enviar ocorrência
      </Button>
    </StyledFourthStep>
  )
}

export default FourthStep
