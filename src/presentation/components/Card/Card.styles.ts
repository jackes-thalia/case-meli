import styled from 'styled-components'
import breakpoints from '../../constansts/breakpoints'

type StyledCardProps = {
  size: 'small' | 'large'
}

export const StyledCard = styled.div<StyledCardProps>`
  width: ${({ size }) =>
    ({
      small: '546px',
      large: '860px',
    })[size] || 'auto'};

  padding: 94px 0;
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
    padding: 94px 92px;

    & > .container {
      justify-content: center;
      max-width: 736px;
    }
  }
`
