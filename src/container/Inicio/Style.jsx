import styled from "styled-components";
import { cores } from "../../styles/GlobalStyle";

export const StyleInicio = styled.div`
    .container{
        display: flex;
        justify-content: center;
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
        border-bottom: 1px solid white;
        padding-left: 8px;
        span{
                color: ${cores.vermelho};
            }
        h1{
            font-size: 24px;
            margin-bottom: 8px;
        }
        p{
            font-size: 16px;
            margin-bottom: 8px;
        }
    }

    img{
    
        width: 300px;
        border-radius: 50%;
        margin-top: 40px
    }

    @media (min-width: 768px){
        flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    }   
`

