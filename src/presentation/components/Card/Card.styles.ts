import styled from 'styled-components'
import breakpoints from '../../constansts/breakpoints'

export const StyledCard = styled.div`
  width: 546px;
  padding: 94px 92px;
  border-radius: 6px;
  background-color: var(--white);

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
  }

  label {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: ${breakpoints.small}) {
    & > .container {
      justify-content: center;
      max-width: 736px;
    }
  }
`
