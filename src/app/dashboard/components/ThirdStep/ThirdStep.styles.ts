import breakpoints from '@/presentation/constansts/breakpoints'
import styled from 'styled-components'

export const StyledThirdStep = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 60px;

  .upload-content {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
  }

  .files-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 8px 16px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    margin-top: 18px;

    & > li {
      display: flex;
      justify-content: space-between;

      & > span {
        white-space: nowrap;
        max-width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  @media (min-width: ${breakpoints.small}) {
    .upload-content {
      grid-template-columns: 1fr 220px;
    }
    .files-list {
      & > li {
        & > span {
          max-width: 300px;
        }
      }
    }
  }
`
