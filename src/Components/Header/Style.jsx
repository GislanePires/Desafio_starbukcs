import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1% 0 0 0;
  justify-content: center;

  nav {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    li {
      color: var(--color-text);
      text-decoration: none;
      list-style: none;

      &:hover {
        color: var(--color-novidades);
      }
    }
  }
`;
