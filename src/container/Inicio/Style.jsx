import styled, { keyframes } from "styled-components";
import { cores } from "../../styles/GlobalStyle";


const bounce = keyframes`
    0%, 100% {
        transform: translateY(0); /* Posição inicial */
    }
    50% {
        transform: translateY(-10px); /* Sobe 10px */
    }
`;

const typing = keyframes`
    0% {
        width: 0; /* Começa com o texto oculto */
    }
    100% {
        width: 100%; /* Exibe o texto completo */
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const TextContainer = styled.div`
            visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
            opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
            height: 100px; /* Altura fixa para o espaço ser preservado */
            animation: ${fadeIn} 1s 3s forwards; /* Exibe a div após a animação do título */
            padding: 16px 0 8px; /* Espaço entre o título e a div */
            border-bottom: 1px solid white;

            p{
                font-family: "Courier New", Courier, monospace;
                font-size: 16px;
                letter-spacing: 1px;
                .red{
                    font-weight: 900;
                }
            }
    `

export const StyleInicio = styled.div`
    .container{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        height: 90vh;
        padding: 16px;
        border-bottom: 1px solid ${cores.branco};
        position: relative;
        z-index: 2;
    }

    .texto{
        text-align: center;
        span{
                color: ${cores.vermelho};
            }
        h1{
            display: inline-block;
            font-size: 24px;
            overflow: hidden; /* Oculta o texto fora da área visível */
            white-space: nowrap; /* Garante que o texto não quebre linha */
            border-right: 3px solid #333; /* Simula o cursor de digitação */
            padding-right: 5px; /* Espaço entre o texto e o "cursor" */
            width: 0; /* Inicialmente, o título é oculto */
            animation: ${typing} 3s steps(30) 1s forwards; /* Animação de digitação */
        }
    }
    .border-imagem{
        /* margin-top: 56px; */
        border: 1px solid ${cores.branco};
        border-radius: 50%;
        padding: 8px;
        .imagem{
            width: 300px; /* Largura e altura iguais para criar o círculo */
            height: 300px;
            border-radius: 50%; /* Torna o contêiner circular */
            overflow: hidden; /* Garante que a imagem não ultrapasse o contêiner */
            
        img{
            width: 330px;
            height: 330px;
            object-fit: cover;
            object-position: 80% top;
        }
    }
    }

    i{
        /* margin-top: 56px; */
        display: inline-block;
        animation: ${bounce} 1.5s infinite ease-in-out;
        color: ${cores.branco};
        font-size: 24px;
    }
    

    @media (min-width: 768px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }   
`

