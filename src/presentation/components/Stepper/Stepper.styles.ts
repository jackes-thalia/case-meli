import breakpoints from '@/presentation/constansts/breakpoints'
import styled from 'styled-components'

export type StyledStepperProps = {
  $showStep: boolean
}

export const StyledStepper = styled.div<StyledStepperProps>`
  padding: 0 16px;
  display: ${({ $showStep }) => ($showStep ? 'unset' : 'none')};

  @media (min-width: ${breakpoints.small}) {
    padding: 0 60px;
  }
`
