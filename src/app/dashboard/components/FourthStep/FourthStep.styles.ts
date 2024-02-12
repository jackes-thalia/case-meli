import styled from 'styled-components'

export const StyledFourthStep = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;

  .resume-title {
    display: grid;
    grid-template-columns: 1fr 52px;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .distribution-center {
    margin-top: 20px;
    cursor: pointer;
  }

  .distribution-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px 10px;
  }

  .occurrence-content {
    display: grid;
    gap: 20px 10px;
    grid-template-columns: repeat(2, 1fr);

    .description {
      grid-column: span 2;
    }
  }
`
