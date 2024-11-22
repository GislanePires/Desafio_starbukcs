import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1% 0 0 0;
  justify-content: center;


  

`;
export const Nav = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: end;

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
  @media (max-width: 768px) {
    /* Menu escondido inicialmente */
    position: absolute;
    top: 60px;
    right: 0;
    flex-direction: column;
    background: var(--color-bg);
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "auto" : "0")}; /* Exibe/Esconde o menu */
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 10px 0;

      li {
        margin: 10px 0;
      }
    }
  }
`;
// export const LinkStyle = styled(Link)`
// text-decoration: none;
// color: var(--color-novidades);


// `;
export const MenuToggle = styled.div`
display: none; /* Esconde em telas maiores */
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background: var(--color-text);
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  /* Animação do botão (opcional) */
  &:hover span {
    background: var(--color-novidades);
  }

  @media (max-width: 768px) {
    display: flex; /* Mostra o botão em telas menores */
  }
`;
