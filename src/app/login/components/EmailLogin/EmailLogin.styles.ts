import styled from 'styled-components'

export const StyledEmailLogin = styled.form`
  display: flex;
  flex-direction: column;

  label[data-error='true'] {
    color: var(--error);
  }
`
