import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  > img {
    width: 40rem;
    flex: 1;
  }

  > div {
    margin-left: 5rem;
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }

    > div {
      margin-left: 0;
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;

    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.secondary};
    font-weight: 400;
  }

  @media (max-width: 1450px) {
    > h1 {
      font-size: 5rem;
    }

    > h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    > h1 {
      font-size: 3rem;
    }

    > h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', mono;
  font-weight: 300;
  color: #fff;
  width: 26rem;
  align-self: flex-start;
  transition: 1s;

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1450px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.2);
  }

  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.comment {
    margin-bottom: 1rem;
    display: block;
    color: ${({ theme }) => theme.text};
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e5;
  }
`;
