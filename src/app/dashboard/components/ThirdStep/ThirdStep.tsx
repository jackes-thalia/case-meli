'use client'

import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { StyledThirdStep } from './ThirdStep.styles'
import LocationInfo from '../LocationInfo/LocationInfo'

const ThirdStep = () => {
  return (
    <StyledThirdStep>
      <LocationInfo />
      <h2>Dados da ocorrência</h2>

      <div className="upload-content">
        <section>
          <Typography>Upload de evidências</Typography>
          <Typography>
            Anexe arquivos que facilitem a análise da ocorrência
          </Typography>
        </section>

        <section>
          <Typography>Observações</Typography>
          <TextField
            id="input-comments"
            name="comments"
            type="text"
            variant="outlined"
            size="medium"
            fullWidth
            sx={{ mt: 3 }}
          />
        </section>
      </div>

      <Button variant="contained" size="large" sx={{ mt: 6 }}>
        Avançar
      </Button>
    </StyledThirdStep>
  )
}

export default ThirdStep
