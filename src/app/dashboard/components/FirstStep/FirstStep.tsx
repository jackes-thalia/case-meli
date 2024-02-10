'use client'

import React from 'react'
import { Button, TextField } from '@mui/material'
import { StyledFirstStep } from './FirstStep.styles'
import LocationModal from './LocationModal/LocationModal'

const FirtStep = () => {
  const [openedLocationModal, setOpenedLocationModal] = React.useState(false)

  const openLocationModal = () => {
    setOpenedLocationModal(true)
  }

  const closeLocationModal = () => {
    setOpenedLocationModal(false)
  }

  return (
    <>
      {openedLocationModal && <LocationModal back={closeLocationModal} />}
      {!openedLocationModal && (
        <StyledFirstStep>
          <h2>Solicitar ocorrência</h2>
          <p>Forneça detalhes da sua ocorrência</p>
          <label>Digite o CEP do centro de distribuição:</label>
          <TextField
            id="input-email"
            name="email"
            type="email"
            variant="outlined"
          />
          <Button
            sx={{ mt: 5 }}
            size="large"
            variant="contained"
            onClick={openLocationModal}
          >
            Buscar
          </Button>
        </StyledFirstStep>
      )}
    </>
  )
}

export default FirtStep
