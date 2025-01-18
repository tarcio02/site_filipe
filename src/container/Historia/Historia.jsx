import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { StyleHistoria, Card } from "./Style"
import filipe from "../../assets/imagens/filipe_cachoeira.jpeg"
import martelo from "../../assets/imagens/rosca-martelo.svg"
import corrida from "../../assets/imagens/corrida.svg"
import bike from "../../assets/imagens/bike.svg"

function Historia(){

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração das animações em milissegundos
            offset: 50, // Distância do scroll para iniciar a animação
            easing: "ease-in-out", // Tipo de transição
            once: false, // Executa a animação apenas uma vez
        });
    }, []);

    return(
        <StyleHistoria>
            <div className="container">
                <div className="texto">
                    <h1><span>Minha história<i className="fa-solid fa-book-open"></i></span></h1>
                    <div className="border-image">
                        <div className="imagem">
                            <img src={filipe} alt="Atleta Filipe" />
                        </div>
                    </div>
                </div>
                <Card data-aos="fade-left">
                    <div className="imagem">
                        <img src={martelo} alt="icone svg" />
                    </div>
                    <p>
                        Ao longo da minha vida sempre fui dedicado ao esporte, 
                        mas em meados de 2016 tive meu primeiro contato com a musculução,
                        e a partir daí acabei me encontrando nesse esporte.
                    </p>
                </Card>
                <Card data-aos="fade-right">
                    <p>
                        Conforme o tempo passou, eu fui cada vez mais me dedicando ao 
                        esporte, aprimorando meus conhecimentos e técnicas, através do meu
                        empenho pude alcaçar ótimos resutados físicos. 
                    </p>
                    <div className="imagem">
                        <img src={corrida} alt="icone svg" />
                    </div>
                </Card>
                <Card data-aos="fade-left">
                    <div className="imagem">
                        <img src={bike} alt="icone svg" />
                    </div>
                    <p>
                        Alguns anos atrás conheci Weberton, com o tempo nossa amizade ficou cada
                        vez mas sólida, ele já sendo atleta o acompanhei em dos campeonatos que competiu.
                    </p>
                </Card>
                <Card data-aos="fade-right">
                    <p className="center">
                        Após essa experiência, tive inspiração para que também iniciasse minha preparação
                        para subir em um competição, desde então venho investindo recursos própios
                        para que esse sonho virasse realidae.

                    </p>
                </Card>
            </div>
        </StyleHistoria>
    )
}

export default Historia