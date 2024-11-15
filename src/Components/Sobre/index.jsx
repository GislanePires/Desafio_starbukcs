import Button from "../Button";
import loja from "/loja.svg";
import * as S from "./Style.jsx";

export default function Sobre() {
  return (
    <S.Sobre>
      <img src={loja} alt="" />
      <S.ContainerText>
        <article>
          <h2>PREPARAÇÃO</h2>
          <h3>Níveis de torra</h3>
          <p>
            Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou
            Torra Escura? Estas sãos as torras que fazem parte dos níveis de
            torra Starbucks®
          </p>
        </article>
        <Button />
      </S.ContainerText>
    </S.Sobre>
  );
}
