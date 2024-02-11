'use client'

import React from 'react'
import { Button, TextField } from '@mui/material'
import { StyledFirstStep } from './FirstStep.styles'
import LocationModal from './LocationModal/LocationModal'
import { DashboardContext } from '@/presentation/providers/DashboardProvider'

const FirtStep = () => {
  const [openedLocationModal, setOpenedLocationModal] = React.useState(false)
  const { addIssueDataFields } = React.useContext(DashboardContext)

  const openLocationModal = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const formData = new FormData(ev.target as HTMLFormElement)
    const formProps = Object.fromEntries(formData)
    addIssueDataFields({
      cep: String(formProps?.cep) || '',
    })
    setOpenedLocationModal(true)
  }

  const closeLocationModal = () => {
    setOpenedLocationModal(false)
  }

  return (
    <>
      {openedLocationModal && <LocationModal back={closeLocationModal} />}
      {!openedLocationModal && (
        <StyledFirstStep onSubmit={(ev) => openLocationModal(ev)}>
          <h2>Solicitar ocorrência</h2>
          <p>Forneça detalhes da sua ocorrência</p>
          <label>Digite o CEP do centro de distribuição:</label>
          <TextField id="input-cep" name="cep" type="text" variant="outlined" />
          <Button sx={{ mt: 5 }} size="large" variant="contained" type="submit">
            Buscar
          </Button>
        </StyledFirstStep>
      )}
    </>
  )
}

export default FirtStep
