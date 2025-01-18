import styled from "styled-components";
import { cores } from "../../styles/GlobalStyle";

export const StylePatrocinio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 80px;
    position: relative;
    z-index: 2;
    padding: 16px;
    height: 100vh;
    text-align: center;

    h1{
        font-size: 24px;
        margin-top: 16px;
        padding-bottom: 16px;
        border-bottom: 2px solid ${cores.branco};
        margin-bottom: 32px;

        span{
            color: ${cores.vermelho};
        }
    }

    .card{
        padding: 16px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 8px;
        img{
            width: 120px;
            margin-bottom: 8px;
        }
    }
`