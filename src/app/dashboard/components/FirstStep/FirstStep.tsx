'use client'

import React from 'react'
import { Button, TextField } from '@mui/material'
import { StyledFirstStep } from './FirstStep.styles'
import LocationModal from './LocationModal/LocationModal'
import { DashboardContext } from '@/presentation/providers/DashboardProvider'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { firstStepValidationSchema } from '../validation/StepsValidation'

const FirtStep = () => {
  const [openedLocationModal, setOpenedLocationModal] = React.useState(false)
  const { addIssueDataFields } = React.useContext(DashboardContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    getValues,
  } = useForm({
    resolver: yupResolver(firstStepValidationSchema),
  })

  const openLocationModal = () => {
    addIssueDataFields({
      cep: String(getValues().cep) || '',
    })
    setOpenedLocationModal(true)
  }

  const closeLocationModal = () => {
    setOpenedLocationModal(false)
  }

  const onSubmit = () => {
    openLocationModal()
  }

  return (
    <>
      {openedLocationModal && <LocationModal back={closeLocationModal} />}
      {!openedLocationModal && (
        <StyledFirstStep onSubmit={handleSubmit(onSubmit)}>
          <h2>Solicitar ocorrência</h2>
          <p>Forneça detalhes da sua ocorrência</p>
          <label data-error={!!errors.cep}>
            Digite o CEP do centro de distribuição:
          </label>
          <TextField
            {...register('cep')}
            id="input-cep"
            type="text"
            variant="outlined"
            error={!!errors.cep}
            helperText={errors.cep?.message}
            onBlur={() => trigger('cep')}
          />
          <Button
            sx={{ mt: 5 }}
            disabled={!isValid}
            size="large"
            variant="contained"
            type="submit"
          >
            Buscar
          </Button>
        </StyledFirstStep>
      )}
    </>
  )
}

export default FirtStep
