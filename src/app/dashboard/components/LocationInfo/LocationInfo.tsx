import { Typography } from '@mui/material'
import { StyledLocationInfo } from './LocationInfo.styles'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'

const LocationInfo = () => {
  return (
    <StyledLocationInfo>
      <section>
        <Inventory2OutlinedIcon color="primary" />
      </section>
      <section>
        <Typography variant="body1">Centro de distribuição Barueri</Typography>
        <Typography variant="body2">CEP: 06445132</Typography>
      </section>
      <section>
        <Typography variant="body1" color="primary">
          Editar
        </Typography>
      </section>
    </StyledLocationInfo>
  )
}

export default LocationInfo
