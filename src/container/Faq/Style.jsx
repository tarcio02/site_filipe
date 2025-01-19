import styled from 'styled-components';
import { cores } from "../../styles/GlobalStyle"

export const Titulo = styled.h1`
    text-align: center;
    border-bottom:2px solid ${cores.branco};
    padding-bottom: 16px;
    margin-bottom: 32px;
    font-size: 24px;
    letter-spacing: 1px;
    

    i{
        margin-left: 8px;
        color: ${cores.vermelho};
    }
`

// Estilos principais
export const FAQContainer = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
`;

export const Question = styled.div`
    background: ${cores.vermelho};
    padding: 15px 20px;
    margin-bottom: 24px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const QuestionText = styled.span`
    font-size: 16px;
    font-weight: bold;
`;

export const Answer = styled.div`
    background: black;
    padding: 15px 20px;
    margin-bottom: 10px;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Icon = styled.span`
    font-size: 18px;
    transition: transform 0.2s ease-in-out;
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;