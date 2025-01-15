import styled from "styled-components";
import { cores } from "../../styles/GlobalStyle";

export const StyleHistoria = styled.div`
    .container{
        /* display: flex;
        justify-content: center;
        flex-direction: column; */
        align-items: center;
        height: 95vh;
        padding: 16px;
        position: relative;
        z-index: 2;
    }

    .texto{
        text-align: center;
        padding-left: 8px;
        span{
                color: ${cores.vermelho};
            }
        h1{
            font-size: 24px;
            margin-bottom: 8px;
            padding-bottom: 16px;
            border-bottom: 1px solid ${cores.branco};

            i{
                font-size: 22px;
                color: ${cores.vermelho};
            }
        }
        p{
            font-size: 16px;
            margin-bottom: 8px;
        }
    }

    img{
        width: 100%;
        border-radius: 8px;
        margin-top: 16px
    }

    @media (min-width: 768px){
        flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    }   
`

