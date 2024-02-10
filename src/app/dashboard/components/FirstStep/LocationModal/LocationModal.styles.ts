import styled from 'styled-components'

export const StyledLocationModal = styled.div`
  width: 478px;
  height: auto;
  padding: 20px 16px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  display: grid;
  grid-template-columns: 40px auto;

  svg {
    color: var(--primary);
    font-size: 30px;
  }

  .info-title {
    display: flex;
    gap: 18px;
  }

  .cep-data {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`
