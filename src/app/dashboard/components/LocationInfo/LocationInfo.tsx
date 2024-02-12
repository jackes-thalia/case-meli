'use client'
import { Typography } from '@mui/material'
import { StyledLocationInfo } from './LocationInfo.styles'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import React from 'react'
import { DashboardContext } from '@/presentation/providers/DashboardProvider'

const LocationInfo = () => {
  const { issueData } = React.useContext(DashboardContext)

  return (
    <StyledLocationInfo>
      <section>
        <Inventory2OutlinedIcon color="primary" />
      </section>
      <section>
        <Typography variant="body1">
          Centro de distribuição {issueData.city}
        </Typography>
        <Typography variant="caption">CEP: {issueData.cep || '-'}</Typography>
      </section>
      <section>
        <Typography variant="body1" color="primary" sx={{ cursor: 'pointer' }}>
          Editar
        </Typography>
      </section>
    </StyledLocationInfo>
  )
}

export default LocationInfo
