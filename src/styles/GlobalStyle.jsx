import { createGlobalStyle } from "styled-components";
import fudo from "../assets/imagens/bg_gym.jpg"

// eslint-disable-next-line react-refresh/only-export-components
export const cores = {
    vermelho: '#d63031',
    branco: '#dfe6e9'
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Courier New", Courier, monospace;
        color: white;
    }

    body{
        font-family: sans-serif;
        position: relative;
        width: 100vw;
        background-image: url(${fudo});
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);  /* Cor preta com 30% de opacidade */
            z-index: 1;
        }
    }
`