'use client'

import React from 'react'
import { Button, Divider, Typography } from '@mui/material'
import { StyledFourthStep } from './FourthStep.styles'
import { StepContext } from '@/presentation/providers/StepProvider'
import { DashboardContext } from '@/presentation/providers/DashboardProvider'
import issueService from '@/service/issueService'

const FourthStep = () => {
  const { nextStep, hideStepper } = React.useContext(StepContext)
  const { issueData } = React.useContext(DashboardContext)
  const {
    cep,
    address,
    city,
    state,
    name,
    title,
    startDate,
    endDate,
    files,
    description,
    comments,
  } = issueData

  const distributionCenterData = [
    { field: 'name', label: 'Nome:', value: `Centro de distribuição ${city}` },
    { field: 'cep', label: 'CEP:', value: cep },
    { field: 'address', label: 'Endereço:', value: address },
    { field: 'city', label: 'Cidade:', value: city },
    { field: 'state', label: 'Estado:', value: state },
  ]

  const occurrenceData = [
    { label: 'Título:', value: title },
    { label: 'Nome do relator:', value: name },
    { label: 'Data da ocorrência:', value: startDate },
    { label: 'Data de encerramento:', value: endDate || '-' },
    {
      label: 'Upload de Evidências:',
      name: 'file',
      value: files.map(({ name }) => name).join(', '),
    },
    {
      label: 'Descrição:',
      name: 'description',
      value: description,
    },
    {
      label: 'Observação:',
      name: 'comments',
      value: comments || ' - ',
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
    issueService.sendIssue(issueData).then(() => {
      hideStepper()
      nextStep()
    })
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
                <Typography
                  data-testid={`distributionCenterData-${item.field}`}
                  variant="caption"
                >
                  {item.value}
                </Typography>
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
