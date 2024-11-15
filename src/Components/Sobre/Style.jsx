import styled from "styled-components";

export const Sobre = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerText = styled.section`
  /* background-color: yellowgreen; */
  width: 50%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--color-text);

  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-weight: 300;
    font-size: 3rem;
  }
`;
