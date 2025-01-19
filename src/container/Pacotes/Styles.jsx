import styled, { keyframes } from "styled-components";
import { cores } from "../../styles/GlobalStyle";

const shakeAnimation = keyframes`
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-10px);
    }
    50% {
        transform: translateX(10px);
    }
    75% {
        transform: translateX(-10px);
    }
`;


export const StylePacotes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    padding: 16px;
    padding-bottom: 32px;
    text-align: center;
    letter-spacing: 1px;
    color: ${cores.branco};
    position: relative;
    z-index: 2;
    border-bottom: 1px solid ${cores.branco};

    h1{
        font-size: 24px;
        border-bottom: 2px solid ${cores.branco};
        padding-bottom: 16px;
        margin-bottom: 16px;
        span{
            color: ${cores.vermelho};
        }
    }

    .card{
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 16px;
        .head{
            margin-bottom:16px;
            
            
            i{
                font-size: 32px;
                color: ${cores.vermelho};
                margin-bottom: 8px;
                }
            h2{
                font-size: 20px;
                font-weight: 400;
            }
    }

        p{
            font-weight: 200;
            font-size: 16px;
            margin-bottom: 16px;
        }

        button{
            display: inline-block;
            animation: ${shakeAnimation} 2.6s ease-in-out infinite;
            border-radius: 16px;
            background-color: transparent;
            border: 1px solid ${cores.branco};
            padding: 8px;
            i{
                margin-left: 8px;
            }
        }
    }
`