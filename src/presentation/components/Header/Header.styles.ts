import styled from 'styled-components'
import breakpoints from '../../constansts/breakpoints'

export const StyledHeader = styled.div`
  width: 100%;
  height: 66px;
  background: var(--secondary);
  top: 0;
  left: 0;
  position: fixed;
  padding: 16px;
  z-index: 100;

  & > .container {
    margin: 0 auto;
    width: 100%;
  }

  @media (min-width: ${breakpoints.small}) {
    & > .container {
      justify-content: center;
      max-width: 736px;
    }
  }
`
