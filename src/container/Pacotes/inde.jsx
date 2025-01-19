import { StylePacotes } from "./Styles";
import { useState } from "react";
import Modal from "../../components/Modal/Index";
import ModalBasico from "../../components/ModalBasico";
import ModalRegular from "../../components/ModalRegular/Index";
import ModalPremium from "../../components/ModalPremium";

function Pacotes(){

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);


    const openModalWithContent = (content) => {
        setModalContent(content); // Define o conteúdo do modal
        setModalOpen(true); // Abre o modal
    };
    
    const closeModal = () => {
        setModalOpen(false); // Fecha o modal
        setModalContent(null); // Limpa o conteúdo
    };

    return(
        <StylePacotes>
            <h1>Pacotes de <span>patrocínio</span></h1>
            <div className="card">
                <div className="head">
                    <i className="fa-solid fa-bullhorn"></i>
                    <h2>Patrocínio básico</h2>
                </div>
                <p>
                    O pacote de patrcínio básico oferece os serviços 
                    de divulgações simples na rede social do atleta,
                    sua marca aparece juntamente com as outras,
                    mas sem detalhes dos produtos.
                </p>
                <button onClick={() => openModalWithContent(<ModalBasico />)} >Saiba mais<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
            </div>
            <div className="card">
                <div className="head">
                    <i className="fa-solid fa-chart-simple"></i>
                    <h2>Patrocínio regular</h2>
                </div>
                <p>
                    O pacote de patrcínio regular oferece os serviços 
                    de divulgações mais avançados na rede social do atleta,
                    sua marca aparece de forma mais destacada, em relação 
                    ao pacote básico.
                </p>
                <button  onClick={() => openModalWithContent(<ModalRegular />)}>Saiba mais<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
            </div>
            <div className="card">
                <div className="head">
                    <i className="fa-solid fa-ranking-star"></i>
                    <h2>Patrocínio premium</h2>
                </div>
                <p>
                    O pacote de patrcínio básico oferece os serviços 
                    de divulgações premium na rede social do atleta,
                    sua marca aparecerar altamente destacada, e terá 
                    conteúdos exclusivos para divulgação.
                </p>
                <button  onClick={() => openModalWithContent(<ModalPremium />)}>Saiba mais<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
        </StylePacotes>
    )
}

export default Pacotes