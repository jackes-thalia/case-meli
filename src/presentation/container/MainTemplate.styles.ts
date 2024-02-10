import styled from 'styled-components'
import breakpoints from '../constansts/breakpoints'

export const StyledMainTemplate = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--white);
  padding-top: 66px;

  & > .container {
    padding: 16px;
    margin: 0 auto;
    width: 100%;
  }

  @media (min-width: ${breakpoints.small}) {
    display: flex;
    background-image: linear-gradient(
      to bottom,
      var(--secondary) 330px,
      var(--white) 330px
    );

    & > .container {
      justify-content: center;
      max-width: 736px;
      min-height: 400px;
    }
  }
`
