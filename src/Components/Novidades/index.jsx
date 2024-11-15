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
        src="Captura de tela 2024-11-10 205921 1.svg"
        alt="Grão de café"
      />
    </S.Novidades>
  );
}
