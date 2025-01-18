import { useState } from "react";
import { FAQContainer, Question, QuestionText, Answer, Icon, Titulo } from "./Style";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
        const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Alterna a pergunta aberta
        };
    
        const faqItems = [
        { question: 'Como patrocinar?', answer: 'React é uma biblioteca JavaScript para construir interfaces de usuário.' },
        { question: 'Qual o tempo que minha marca será divulgada?', answer: 'Styled Components é uma biblioteca para estilização com CSS-in-JS em React.' },
        { question: 'quais as formas de pagamento?', answer: 'Você clica em uma pergunta e a resposta é exibida abaixo.' },
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