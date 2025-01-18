import styled, { keyframes } from "styled-components";
import { cores } from "../../styles/GlobalStyle";

const shakeAnimation = keyframes`
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-4px);
    }
    50% {
        transform: translateX(4px);
    }
    75% {
        transform: translateX(-4px);
    }
`;

export const StylePremium = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1px;

    .head{
        i{
                color: ${cores.vermelho};
                font-size: 40px;
                margin-bottom: 16px;
            }
        h2{
            font-size: 24px;
            border-bottom: 2px solid ${cores.branco};
            padding-bottom: 16px;
            margin-bottom: 32px;
            font-weight: 400;
        }
    }

    .lista{
        width: 80%;
        margin-bottom: 32px;
        ul{
            text-align: start;
            font-weight: 300;
        li{
            margin-bottom: 8px;
        }
        }
    }

    .wpp{
        border-radius: 8px;
        padding: 8px;
        color: ${cores.branco};
        background-color: #25D366;
        h3{
            font-size: 16px;
            font-weight: 400;
        }
        i{
            display: inline-block;
            animation: ${shakeAnimation} 2.6s ease-in-out infinite;
            background-color: transparent;
            font-size: 16px;
            margin-left: 8px;
        }
    }
`