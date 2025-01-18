import { StyleBasico } from "./Style";

function ModalBasico() {
    return (
        <StyleBasico>
            <div className="head">
                    <i className="fa-solid fa-bullhorn"></i>
                    <h2>Patrocínio básico</h2>
                </div>
                <div className="lista">
                    <ul>
                        <li>Vìdeos e fotos no story.</li>
                        <li>Roteiro personalizado pelo patrocinador.</li>
                        <li>Frequência até três vezes por semana.</li>
                        <li>A marca aparecerar em atés dois vídeos ou fotos do feed por semana.</li>
                        <li>Valores a combinar palo Whatsapp.</li>
                    </ul>
                </div>
                <div className="wpp">
                    <h3>Envie-me uma mensagem<i className="fa-brands fa-whatsapp"></i></h3>
                </div>
        </StyleBasico>
    )
}

export default ModalBasico