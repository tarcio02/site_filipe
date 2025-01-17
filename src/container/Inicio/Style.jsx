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
            padding: 14px 0 8px;
            border-bottom: 1px solid white;

            p{
                font-size: 16px;
                letter-spacing: 1px;
                font-weight: 300;
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
        /* border: 1px solid ${cores.branco};
        border-radius: 50%;
        padding: 8px; */

        display: inline-block;
         /* Controle o tamanho da borda */
        border-radius: 50%; /* Mantém o contorno arredondado */
        background: radial-gradient(circle, rgba(214, 48, 49, 0.6), rgba(214, 48, 49, 0.2), transparent);
        box-shadow: 0 0 20px rgba(214, 48, 49, 0.7), 
            0 0 40px rgba(214, 48, 49, 0.5), 
            0 0 60px rgba(214, 48, 49, 0.3);

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
        /* color: ${cores.branco}; */
        font-size: 24px;
        text-shadow: 0 2px 4px rgba(223, 230, 233, 0.8)
    }
    

    @media (min-width: 768px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }   
`

