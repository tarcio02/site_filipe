import { StyleHistoria } from "./Style"
import filipe from "../../assets/imagens/filipe.jpeg"

function Historia(){
    return(
        <StyleHistoria>
            <div className="container">
                <div className="texto">
                    <h1><span>Minha história <i className="fa-solid fa-angles-down"></i></span></h1>
                    <p>
                        Sempre gostei de assistir vídeos de fisiculturismo no YouTube e sempre falei que um dia eu estaria ali naquele palco competindo com os melhores mesmo sabendo que ia ser difícil pois é um esporte de alto rendimento e se trata de um esporte caro pois  conta com suplementação,  manipulados, vitaminas ,ergogênico, exame médicos fora e a dieta também que é um gasto muito alto.
                        Tinha em minha cabeça que um dia iria competir, só não sabia que iria realizar tão rápido esse sonho. Conheci Renan López um cara de coração imenso que pedi uma ajuda pra poder realizar meu sonho, pois como ele já tinha competido ficava mas fácil ele me colocar neste mundo, e ele na hora aceitou o desafio  e com muita bondade e humildade me ajudou em tudo, me ensinou tudo e hoje primeiramente graças á Deus  e depois á ele,  estou competindo pela segunda vez e melhorando cada vez mais as  minhas colocações e conseguindo alcançar o meu objetivo.
                    </p>
                </div>
                <img src={filipe} alt="Atleta Filipe" />
            </div>
        </StyleHistoria>
    )
}

export default Historia