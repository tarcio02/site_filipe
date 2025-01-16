import { useState, useEffect } from "react";
import { StyleInicio, TextContainer } from "./Style";
import filipe from "../../assets/imagens/filipe.jpeg"

function Inicio(){

    const [isTextVisible, setIsTextVisible] = useState(false); // Estado de visibilidade do texto

    useEffect(() => {
        // Quando a animação do título for concluída, mostramos o texto
        const timer = setTimeout(() => {
          setIsTextVisible(true); // Mostra o texto após 3 segundos (tempo da animação)
        }, 3000); // 3000ms corresponde ao tempo da animação
    
        // Limpeza do timer
        return () => clearTimeout(timer);
    }, []);

    const handleScroll = () => {
        // Calcula 90% da altura da viewport
        const scrollAmount = window.innerHeight * 0.9;
    
        // Rola a página 90vh para baixo
        window.scrollBy({
        top: scrollAmount, // Quantidade de pixels a rolar para baixo
        left: 0, // Não rolar horizontalmente
        behavior: "smooth", // Rola suavemente
        });
    };

    return(
        <StyleInicio>
            <div className="container">
                <div className="texto">
                    <h1>Olá, eu sou <span>Filipe Lima</span></h1>
                    <TextContainer isVisible={isTextVisible}>
                        <p>
                            Venha fazer parte da minha história e crescer <b>junto comigo.</b>
                        </p>
                        <p>Pacotes de patrocínio e divulgação para <span className="red">sua empresa.</span></p>
                    </TextContainer>
                </div>
                <div className="border-imagem">
                    <div className="imagem">
                        <img src={filipe} alt="Atleta Filipe" />
                    </div>
                </div>
                <i onClick={handleScroll} className="fa-solid fa-angles-down"></i>
            </div>
        </StyleInicio>
    )
}

export default Inicio