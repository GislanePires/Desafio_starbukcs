import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Style.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Header>
      <img src="https://raw.githubusercontent.com/GislanePires/images-starbucks/6834a637479d57f8b7bc748c2d5fbe81b3805bde/logo%201.svg" alt="Logomarca" />
      {/* menu sanduiche para a responsividade :) */}
      <S.MenuToggle onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </S.MenuToggle>

      <S.Nav isOpen={isOpen}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/novidades">Novidades</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </S.Nav>
    </S.Header>
  );
}
