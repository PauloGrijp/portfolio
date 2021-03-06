import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 5rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.primary};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.secondary};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      > svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.text};
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    @media (max-width: 450px) {
      > button {
        font-size: 0.8rem;
      }

      > section {
        gap: 0.9rem;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
