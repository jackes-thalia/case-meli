import styled from 'styled-components'
import breakpoints from '../constants/breakpoints'

export const StyledMainTemplate = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--white);
  padding-top: 66px;
  padding-bottom: 40px;

  & > .container {
    justify-content: center;
    padding: 16px;
    margin: 0 auto;
    width: 100%;
    display: flex;
  }

  @media (min-width: ${breakpoints.small}) {
    display: flex;
    background-image: linear-gradient(
      to bottom,
      var(--secondary) 330px,
      var(--gray-300) 330px
    );

    & > .container {
      justify-content: center;
      max-width: 736px;
      min-height: 400px;
    }
  }
`
