import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--color-green);
  width: 12rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: none;
  color: rgb(255, 255, 255, 1);
  font-size: 1.1rem;
  transition: all 0.8s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--color-novidades);
    box-shadow: 12px 10px 10px 0px rgba(0, 0, 0, 0.85) inset;
    transform: scale(1.0);
  }
`;
