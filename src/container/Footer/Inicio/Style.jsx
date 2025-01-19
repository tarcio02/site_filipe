import styled from "styled-components";
import { cores } from "../../../styles/GlobalStyle";

export const StyleFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 16px;
    position: relative;
    z-index: 2;
    letter-spacing: 1px;
    text-align: center;
    gap: 8px;

    h1{
        font-size: 24px;
        
        span{
            color: ${cores.vermelho};
        }
    }
    
    p{
        font-size: 16px;
        font-weight: 300;
    }

    .social{
        display: flex;
        gap: 16px;
        i{
            font-size: 32px;
        }
    }
`