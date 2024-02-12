'use client'

import React from 'react'
import { StyledLocationModal } from './LocationModal.styles'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import { Button, Divider, Typography } from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import { StepContext } from '@/presentation/providers/StepProvider'
import { DashboardContext } from '@/presentation/providers/DashboardProvider'

type LocationModalProps = {
  back: () => void
}

const LocationModal = ({ back }: LocationModalProps) => {
  const { hideStepper, showStepper, nextStep } = React.useContext(StepContext)
  const { issueData } = React.useContext(DashboardContext)

  React.useEffect(() => {
    hideStepper()

    return () => {
      showStepper()
    }
  }, [hideStepper, showStepper])

  const { cep, address, city, state, neighborhood, complement } = issueData

  const cepData = [
    { class: 'col-4', label: 'CEP:', value: cep },
    { class: 'col-4', label: 'Endereço:', value: address },
    { class: 'col-2', label: 'Cidade:', value: city },
    { class: 'col-2', label: 'Estado:', value: state },
    { class: 'col-2', label: 'Bairro:', value: neighborhood },
    { class: 'col-2', label: 'Complemento:', value: complement },
  ]

  return (
    <StyledLocationModal>
      <header>
        <ArrowBackIosNewOutlinedIcon color="action" onClick={back} />
      </header>
      <Typography variant="h4" sx={{ mb: 6 }}>
        Centro de distribuição encontrado:
      </Typography>
      <section>
        <Inventory2OutlinedIcon />
        <div>
          <section className="info-title">
            <div>
              <Typography variant="subtitle1">Unidade:</Typography>
              <Typography variant="subtitle2">
                Centro de distribuição {city}
              </Typography>
            </div>
          </section>

          <Divider sx={{ mt: 2, mb: 4 }} />

          <section className="cep-data">
            {cepData.map((item, index) => (
              <div key={index} className={item.class}>
                <Typography variant="body1" className="label">
                  {item.label}
                </Typography>
                <Typography variant="caption" className="value">
                  {item.value === '' ? '-' : item.value}
                </Typography>
              </div>
            ))}
          </section>
        </div>
      </section>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 6 }}
        fullWidth
        onClick={nextStep}
      >
        Continuar
      </Button>
    </StyledLocationModal>
  )
}

export default LocationModal
