'use client'

import React from 'react'
import { StyledLocationModal } from './LocationModal.styles'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import { Button, Divider, Typography } from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import { StepContext } from '@/presentation/providers/StepProvider'

type LocationModalProps = {
  back: () => void
}

const LocationModal = ({ back }: LocationModalProps) => {
  const { hideStepper, showStepper, nextStep } = React.useContext(StepContext)

  React.useEffect(() => {
    hideStepper()

    return () => {
      showStepper()
    }
  }, [hideStepper, showStepper])

  const cepData = [
    { class: 'col-4', label: 'CEP:', value: '06445132' },
    { class: 'col-4', label: 'Endereço:', value: 'Av Barueri silva rocha' },
    { class: 'col-2', label: 'Cidade:', value: 'Barueri' },
    { class: 'col-2', label: 'Estado:', value: 'São Paulo' },
    { class: 'col-2', label: 'Numero:', value: '02' },
    { class: 'col-2', label: 'Complemento:', value: 'Perto da ponte' },
  ]

  return (
    <StyledLocationModal>
      <header>
        <ArrowBackIosNewOutlinedIcon color="action" onClick={back} />
      </header>
      <section>
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
              <div key={index} className={item.class}>
                <div className="label">{item.label}</div>
                <div className="value">{item.value}</div>
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
