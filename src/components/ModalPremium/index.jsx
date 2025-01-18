import { StylePremium } from "./Style";

function ModalPremium() {
    return (
        <StylePremium>
            <div className="head">
                    <i className="fa-solid fa-ranking-star"></i>
                    <h2>Patrocínio premium</h2>
                </div>
                <div className="lista">
                    <ul>
                        <li>Esse é o pacote de divulgação 100% completo.</li>
                        <li>O atleta irá representar sua marca de forma total.</li>
                        <li>Sua marca será divulgada em storys e feeds todos os dias</li>
                        <li>Conteúdos exclusivos para sua marca produzidos pelo atleta.</li>
                        <li>Pacote Limitado a apenas 5 empresas.</li>
                    </ul>
                </div>
                <div className="wpp">
                    <h3>Envie-me uma mensagem<i className="fa-brands fa-whatsapp"></i></h3>
                </div>
        </StylePremium>
    )
}

export default ModalPremium