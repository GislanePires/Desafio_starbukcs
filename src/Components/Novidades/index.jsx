import * as S from "./Style.jsx";
import Button from "../Button";

export default function Novidades() {
  return (
    <S.Novidades>
      <S.NovidadesText>
        <S.Titles>
          <h2>PREPARAÇÃO</h2>
          <h3>Níveis de torra</h3>
        </S.Titles>
        <p>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas sãos as torras que fazem parte dos níveis de torra
          Starbucks®
        </p>
        <Button />
      </S.NovidadesText>
      <S.Imagem
        src="https://raw.githubusercontent.com/GislanePires/images-starbucks/6834a637479d57f8b7bc748c2d5fbe81b3805bde/Captura%20de%20tela%202024-11-10%20205921%201.svg"
        alt="Grão de café"
      />
    </S.Novidades>
  );
}
