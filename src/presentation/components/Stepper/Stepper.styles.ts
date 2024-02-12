import breakpoints from '@/presentation/constants/breakpoints'
import styled from 'styled-components'

export type StyledStepperProps = {
  $showStep: boolean
}

export const StyledStepper = styled.div<StyledStepperProps>`
  padding: 0 16px;
  display: ${({ $showStep }) => ($showStep ? 'unset' : 'none')};
  position: relative;

  .back-btn {
    position: absolute;
    left: 0;
    top: -60px;
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${breakpoints.small}) {
    padding: 0 60px;
    .back-btn {
      top: 2px;
    }
  }
`
