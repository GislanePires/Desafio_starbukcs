import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Button from "../Button/index.jsx";
import * as S from "./Style.jsx";

export default function Home() {
  const [cup, setCup] = useState({
    src: "amarelo2x 1.svg",
    color: "var(--color-yellow)",
  });

  const changeCup = (src, color) => {
    setCup({ src, color });
  };

  return (
    <S.Home>
      <S.ContainerText>
        <article>
          <h2>Mais que Café</h2>
          <h2>
            Isso é <span>Starbucks</span>
          </h2>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
        </article>
        <Button />
        <figure>
          <img
            src="laranja 3.svg"
            alt="Bebida laranja"
            onClick={() => changeCup("laranja2x 1.svg", "var(--color-green)")}
          />
          <img
            src="vermelho 1.svg"
            alt="Bebida vermelha"
            onClick={() => changeCup("vermelho2x 1.svg", "var(--color-red)")}
          />
          <img
            src="amarelo 1.svg"
            alt="Bebida amarela"
            onClick={() => changeCup("amarelo2x 1.svg", "var(--color-yellow)")}
          />
        </figure>
      </S.ContainerText>
      <S.ContainerBigCup>
        <S.BgCup style={{ backgroundColor: cup.color }}>
          <S.SocialIcons>
            <FaFacebook onClick={() => window.open("https://www.facebook.com/StarbucksBrasil/?locale=pt_BR","_blank")} />
            <FaTwitter onClick={() => window.open("https://x.com/starbucks?lang=en","_blank")} />
            <FaInstagram onClick={() => window.open("https://www.instagram.com/starbucks/?hl=en","_blank")} />
          </S.SocialIcons>
          <img src={cup.src} alt="Bebida escolhida" />
        </S.BgCup>
      </S.ContainerBigCup>
    </S.Home>
  );
}
