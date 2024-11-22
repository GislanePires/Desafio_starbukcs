import Button from "../Button";
import * as S from "./Style.jsx";

export default function Sobre() {
  return (
    <S.Sobre>
      <img src="https://raw.githubusercontent.com/GislanePires/images-starbucks/6834a637479d57f8b7bc748c2d5fbe81b3805bde/loja.svg" alt="" />
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
