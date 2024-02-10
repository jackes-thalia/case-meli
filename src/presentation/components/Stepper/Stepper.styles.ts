import styled from 'styled-components'

export type StyledStepperProps = {
  $showStep: boolean
}

export const StyledStepper = styled.div<StyledStepperProps>`
  padding: 0 60px;
  display: ${({ $showStep }) => ($showStep ? 'unset' : 'none')};
`
