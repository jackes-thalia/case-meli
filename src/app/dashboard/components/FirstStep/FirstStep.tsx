'use client'

import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { StyledFirstStep } from './FirstStep.styles'
import LocationModal from './LocationModal/LocationModal'
import { DashboardContext } from '@/presentation/providers/DashboardProvider'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { firstStepValidationSchema } from '../validation/StepsValidation'
import issueService, { IGetByCepProps } from '@/service/issueService'
import textMaskCustom from '@/utils/textMaskCustom'

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
    const cep = String(getValues().cep).replace('-', '')

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
        <StyledFirstStep
          data-testid="first-step-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography variant="h2" component="h2">
            Solicitar ocorrência
          </Typography>
          <Typography variant="caption">
            Forneça detalhes da sua ocorrência
          </Typography>
          <Typography
            variant="caption"
            data-error={!!errors.cep}
            sx={{ mb: 2, mt: 6 }}
          >
            Digite o CEP do centro de distribuição:
          </Typography>
          <TextField
            {...register('cep')}
            type="text"
            variant="outlined"
            error={!!errors.cep}
            helperText={errors.cep?.message}
            onBlur={() => trigger('cep')}
            inputProps={{
              'data-testid': 'input-cep',
            }}
            InputProps={{
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              inputComponent: textMaskCustom('00000-000') as any,
            }}
          ></TextField>
          <Button
            sx={{ mt: 5 }}
            disabled={!isValid}
            size="large"
            variant="contained"
            type="submit"
            name="Buscar"
          >
            Buscar
          </Button>
        </StyledFirstStep>
      )}
    </>
  )
}

export default FirtStep
