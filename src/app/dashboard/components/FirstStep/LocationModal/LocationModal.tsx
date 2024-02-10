'use client'

import React from 'react'
import { StyledLocationModal } from './LocationModal.styles'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import { Divider, Typography } from '@mui/material'

const LocationModal = () => {
  const cepData = [
    { label: 'CEP:', value: '06445132' },
    { label: 'Endereço:', value: 'Av Barueri silva rocha' },
    { label: 'Cidade:', value: 'Barueri' },
    { label: 'Estado:', value: 'São Paulo' },
    { label: 'Numero:', value: '02' },
    { label: 'Complemento:', value: 'Perto da ponte' },
  ]

  return (
    <StyledLocationModal>
      <Inventory2OutlinedIcon />
      <div>
        <section className="info-title">
          <div>
            <Typography>Unidade:</Typography>
            <Typography>Centro de distribuição Barueri</Typography>
          </div>
        </section>

        <Divider sx={{ mt: 2, mb: 4 }} />

        <section className="cep-data">
          {cepData.map((item, index) => (
            <div key={index}>
              <div className="label">{item.label}</div>
              <div className="value">{item.value}</div>
            </div>
          ))}
        </section>
      </div>
    </StyledLocationModal>
  )
}

export default LocationModal
