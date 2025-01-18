import { StyleRegular } from "./Style";

function ModalRegular() {
    return (
        <StyleRegular>
            <div className="head">
                    <i className="fa-solid fa-chart-simple"></i>
                    <h2>Patrocínio regular</h2>
                </div>
                <div className="lista">
                    <ul>
                        <li>Vìdeos e fotos no story/feed.</li>
                        <li>Roteiro personalizado pelo patrocinador.</li>
                        <li>Roteiro desenvolvido pelo atleta.</li>
                        <li>A marca aparecerar em todos os vídeos/fotos do feed.</li>
                        <li>3 storys/semana exclusivos para divulgar a marca.</li>
                    </ul>
                </div>
                <div className="wpp">
                    <h3>Envie-me uma mensagem<i className="fa-brands fa-whatsapp"></i></h3>
                </div>
        </StyleRegular>
    )
}

export default ModalRegular