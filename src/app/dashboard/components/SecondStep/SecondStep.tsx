'use client'

import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { StyledSecondStep } from './SecondStep.styles'
import LocationInfo from '../LocationInfo/LocationInfo'
import { StepContext } from '@/presentation/providers/StepProvider'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { secondStepValidationSchema } from '../validation/StepsValidation'
import { DashboardContext } from '@/presentation/providers/DashboardProvider'

interface OccurrenceType {
  name: 'title' | 'name' | 'startDate' | 'endDate' | 'description'
  label: string
  type: 'text' | 'date'
}

const SecondStep = () => {
  const { nextStep } = React.useContext(StepContext)
  const { addIssueDataFields } = React.useContext(DashboardContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    getValues,
  } = useForm({
    resolver: yupResolver(secondStepValidationSchema),
  })

  const occurrenceData: OccurrenceType[] = [
    { name: 'title', label: 'Título:*', type: 'text' },
    { name: 'name', label: 'Nome do relator:*', type: 'text' },
    { name: 'startDate', label: 'Data da ocorrência:*', type: 'date' },
    { name: 'endDate', label: 'Data de encerramento:', type: 'date' },
    { name: 'description', label: 'Descrição:*', type: 'text' },
  ]

  const onSubmit = () => {
    addIssueDataFields({
      ...getValues(),
    })

    nextStep()
  }

  return (
    <StyledSecondStep onSubmit={handleSubmit(onSubmit)}>
      <LocationInfo />
      <Typography variant="subtitle2">Dados da ocorrência</Typography>

      <section className="occurrence-data">
        {occurrenceData.map((item, index) => (
          <div
            key={index}
            className={item.name === 'description' ? 'description' : ''}
          >
            <Typography variant="caption" className="label">
              {item.label}
            </Typography>
            <TextField
              {...register(item.name)}
              id={`input-${item.name}`}
              name={`${item.name}`}
              type={`${item.type}`}
              variant="outlined"
              size="medium"
              fullWidth
              error={!!errors[item.name]}
              helperText={errors[item.name]?.message}
              onBlur={() => trigger(item.name)}
              sx={{ mt: 3 }}
            />
          </div>
        ))}
      </section>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 6 }}
        disabled={!isValid}
        type="submit"
      >
        Avançar
      </Button>
    </StyledSecondStep>
  )
}

export default SecondStep
