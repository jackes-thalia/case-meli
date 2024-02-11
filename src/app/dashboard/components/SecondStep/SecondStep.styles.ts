import breakpoints from '@/presentation/constansts/breakpoints'
import styled from 'styled-components'

export const StyledSecondStep = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;

  .occurrence-data {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .description {
    grid-column: 1;
  }

  @media (min-width: ${breakpoints.small}) {
    .description {
      grid-column: span 2;
    }
    .occurrence-data {
      grid-template-columns: 1fr 1fr;
    }
  }
`
