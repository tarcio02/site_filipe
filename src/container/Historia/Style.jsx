import styled from "styled-components";
import { cores } from "../../styles/GlobalStyle";

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 4px;
    border-radius: 8px;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    font-weight: 200;
    margin-bottom: 16px;

    .imagem{
        align-items: center;
        img{
            width: 120px;
        }
    }
    .center{
        text-align: center;
    }
`

export const StyleHistoria = styled.div`
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;
        position: relative;
        z-index: 2;
        width: 100%;
        border-bottom: 1px solid ${cores.branco};
    }

    .texto{
        text-align:center;
        span{
                color: ${cores.branco};
            }
        h1{
            font-size: 24px;
            margin-bottom: 32px;
            padding-bottom: 16px;
            border-bottom: 2px solid ${cores.branco};
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
        border: solid 2px ${cores.branco};
        padding: 8px;
        margin: 16px 0;
        border-radius: 8px;
        

        .imagem{
            overflow: hidden;
            border-radius: 8px;
            
            img{
                width: 350px;
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

