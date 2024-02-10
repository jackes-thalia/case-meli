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
        <Typography>Centro de distribuição Barueri</Typography>
        <Typography>CEP: 06445132</Typography>
      </section>
      <section>
        <Typography color="primary">Editar</Typography>
      </section>
    </StyledLocationInfo>
  )
}

export default LocationInfo
