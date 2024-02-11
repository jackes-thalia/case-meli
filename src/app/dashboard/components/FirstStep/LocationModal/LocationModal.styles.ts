import breakpoints from '@/presentation/constansts/breakpoints'
import styled from 'styled-components'

export const StyledLocationModal = styled.div`
  margin-top: -52px;
  background-color: var(--white);

  header {
    display: flex;
    height: 62px;
    width: 100%;
  }
  & > section {
    width: 100%;
    height: auto;
    padding: 20px 16px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
    display: grid;
    grid-template-columns: 1fr;

    svg {
      color: var(--primary);
      font-size: 30px;
    }

    .info-title {
      display: flex;
      margin-top: 8px;
    }

    .cep-data {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    .col-1 {
      grid-column: span 1;
    }
    .col-2 {
      grid-column: span 2;
    }
    .col-3 {
      grid-column: span 3;
    }
    .col-4 {
      grid-column: span 4;
    }
  }
  @media (min-width: ${breakpoints.small}) {
    & > section {
      grid-template-columns: 40px auto;

      .col-1 {
        grid-column: span 2;
      }
      .col-2 {
        grid-column: span 2;
      }
      .col-3 {
        grid-column: span 2;
      }
      .col-4 {
        grid-column: span 2;
      }
    }
    .cep-data {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  }
`
