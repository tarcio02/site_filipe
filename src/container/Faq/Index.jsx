import { useState } from "react";
import { FAQContainer, Question, QuestionText, Answer, Icon, Titulo } from "./Style";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
        const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Alterna a pergunta aberta
        };
    
        const faqItems = [
        { 
            question: 'Como patrocinar?',
            answer: 'Entre em contato comigo pelo meu whatsapp, e iremos ver qual o pacote mais se encaixa a sua necessidade.' 
        },
        { 
            question: 'Por quanto tempo minha marca será divulgada?',
            answer: 'você pode fechar patrocínio por quanto tempo desejar, seja um mês ou um ano (valores podem mudar ao decorrer do tempo).'
        },
        { 
            question: 'Quais as formas de pagamento?', 
            answer: 'Aceito pix, cartão, espécie ou produtos necessários para minha preparção.' 
        },
        ];
    
        return (
        <FAQContainer>
            <Titulo>Perguntas frequentes<i className="fa-solid fa-person-circle-question"></i></Titulo>
            {faqItems.map((item, index) => (
            <div key={index}>
                <Question onClick={() => toggleQuestion(index)}>
                <QuestionText>{item.question}</QuestionText>
                <Icon isOpen={openIndex === index}>▼</Icon>
                </Question>
                {openIndex === index && <Answer>{item.answer}</Answer>}
            </div>
            ))}
        </FAQContainer>
        );
    };

export default FAQ;