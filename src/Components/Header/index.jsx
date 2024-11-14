import { Link } from "react-router-dom";
import * as S from "./Style.jsx";

export default function Header () {
    return (
        <S.Header>
            <img src="/logo 1.svg" alt="Logomarca" />
            <nav>
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
            </nav>
        </S.Header>
    );
}