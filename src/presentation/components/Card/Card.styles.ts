import styled from 'styled-components'
import breakpoints from '../../constants/breakpoints'

type StyledCardProps = {
  size: 'small' | 'large'
}

export const StyledCard = styled.div<StyledCardProps>`
  width: 100%;
  padding: 94px 0;
  border-radius: 6px;
  background-color: var(--white);
  height: fit-content;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.small}) {
    padding: 94px 92px;
    width: ${({ size }) =>
      ({
        small: '546px',
        large: '860px',
      })[size] || 'auto'};

    & > .container {
      justify-content: center;
      max-width: 736px;
    }
  }
`
