import Button from "../Button";
import loja from "/loja.svg";

export default function Sobre() {
    return(
        <section>
           <img src={loja} alt="" />
           <section>
                <article>
                    <h3>PREPARAÇÃO</h3>
                    <h2>Níveis de torra</h2>
                    <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                </article>
                <Button />
           </section>
        </section>
    );
}