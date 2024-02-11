'use client'

import React from 'react'
import { Button, TextField } from '@mui/material'
import { StyledFirstStep } from './FirstStep.styles'
import LocationModal from './LocationModal/LocationModal'
import { DashboardContext } from '@/presentation/providers/DashboardProvider'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { firstStepValidationSchema } from '../validation/StepsValidation'
import issueService, { IGetByCepProps } from '@/service/issueService'

const FirtStep = () => {
  const [openedLocationModal, setOpenedLocationModal] = React.useState(false)

  const { addIssueDataFields } = React.useContext(DashboardContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    setError,
    getValues,
  } = useForm({
    resolver: yupResolver(firstStepValidationSchema),
  })

  const openLocationModal = (data: IGetByCepProps) => {
    if (data.erro) {
      setError('cep', {
        message: 'Centro de distribuição não encontrado',
      })
      return
    }
    addIssueDataFields({
      cep: String(getValues().cep) || '',
      address: data?.logradouro,
      city: data?.localidade,
      comments: data?.complemento,
      state: data?.uf,
      neighborhood: data?.bairro,
    })
    setOpenedLocationModal(true)
  }

  const closeLocationModal = () => {
    setOpenedLocationModal(false)
  }

  const onSubmit = async () => {
    const cep = String(getValues().cep)

    try {
      const data = await issueService.getByCep(cep)
      openLocationModal(data)
    } catch (error) {
      console.log(error)
    }
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
