import styled from "styled-components";
import { cores } from "../../styles/GlobalStyle";

export const StyleHistoria = styled.div`
    .container{
        height: 95vh;
        padding: 16px;
        position: relative;
        z-index: 2;
        width: 100%;
    }

    .texto{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-left: 8px;
        span{
                color: ${cores.branco};
            }
        h1{
            font-size: 24px;
            margin-bottom: 8px;
            padding-bottom: 16px;
            border-bottom: 2px solid ${cores.branco};
            /* font-weight: 400; */
            letter-spacing: 1px;
            i{
                font-size: 22px;
                margin-left: 8px;
            }
        }
        p{
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
        }
    }

    .border-image{
        border: solid 1px ${cores.branco};
        padding: 8px;
        margin: 16px 0;
        border-radius: 8px;
        .imagem{
            width: 300px; /* Largura e altura iguais para criar o círculo */
            height: 300px;
            overflow: hidden; /* Garante que a imagem não ultrapasse o contêiner */
            border-radius: 8px;
            img{
                width: 330px;
                height: 330px;
                object-fit: cover;
                object-position: bottom;
            }
        }
    }

    @media (min-width: 768px){
        flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    }   
`

