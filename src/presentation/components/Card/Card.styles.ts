import styled from 'styled-components'
import breakpoints from '../../constansts/breakpoints'

export const StyledCard = styled.div`
  width: 546px;
  padding: 94px 92px;
  border-radius: 6px;
  background-color: var(--white);
  height: fit-content;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 16px;
  }

  label {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    margin: 12px 0 8px;
  }

  @media (min-width: ${breakpoints.small}) {
    & > .container {
      justify-content: center;
      max-width: 736px;
    }
  }
`
