import { StyleCardHistoria } from "./Style"

function cardHistoria({src, texto}){
    return(
        <StyleCardHistoria>
            <div className="imagem">
                <img src={src} alt="ícone" />
            </div>
            <p>
                {texto}
            </p>
        </StyleCardHistoria>
    )
}
export default cardHistoria