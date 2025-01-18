import { StylePatrocinio } from "./Style";
import money from "../../assets/imagens/money.svg"

function Patrocinio() {



    return(
        <StylePatrocinio>
            <h1>Por que Patricinar um <span>atleta?</span></h1>
            <div className="card">
                <img src={money} alt="Mulher efetuando um pagamento"/>
                <p>
                    Durante seu período de preparação um atleta tem muitos gastos,
                    com: dieta, suplementos, ergogênicos, roupas e entre outros gastos 
                    que o atleta pode vir a ter. Porém, suas redes sociais são uma 
                    ferramenta perfeita para atrair a atenção do público, com o alto volume
                    de publicações, as visualizações do seu perfil sobem muito, já que
                    esse é um esporte que está com maior asseção no momento, e isso traz benefícios
                    não somente ao atleta mas também a você que desejar que sua marca 
                    seja representado por um, pois com alta visibilidade das redes socias 
                    sua marca será divulgada no mercado.
                </p>
            </div>
        </StylePatrocinio>
    )
}

export default Patrocinio