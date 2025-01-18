import styled from "styled-components";
import { cores } from "../../styles/GlobalStyle";

export const StyleModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export const ModalContent = styled.div`
    position: relative;
    background: black;
    padding: 16px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    p{
        color: ${cores.branco};
    }
    button{
        border: none;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: black;
        i{
            font-size: 20px;
            color: ${cores.vermelho};
        }
    }
`;