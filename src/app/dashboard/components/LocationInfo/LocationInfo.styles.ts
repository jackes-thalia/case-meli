import breakpoints from '@/presentation/constansts/breakpoints'
import styled from 'styled-components'

export const StyledLocationInfo = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 24px;
  display: grid;
  grid-template-columns: 40px 1fr 50px;
  margin-bottom: 34px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);

  @media (min-width: ${breakpoints.small}) {
    width: 612px;
  }
`
