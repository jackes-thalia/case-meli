import breakpoints from '@/presentation/constansts/breakpoints'
import styled from 'styled-components'

export const StyledFirstStep = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 60px;

  @media (min-width: ${breakpoints.small}) {
    padding: 60px 40px 0;
  }
`
