import { StyleInicio } from "./Style";
import filipe from "../../assets/imagens/filipe.jpeg"
function Inicio(){
    return(
        <StyleInicio>
            <div className="container">
                <div className="texto">
                    <h1>Olá, eu sou <span>Filipe Lima</span></h1>
                    <p>
                        <b>Venha fazer parte da minha historia e crescer junto comigo</b>
                    </p>
                    <p>Pacotes de patrocínio e divulgação para <span>sua empresa</span></p>
                </div>
                <img src={filipe} alt="Atleta Filipe" />
            </div>
        </StyleInicio>
    )
}

export default Inicio