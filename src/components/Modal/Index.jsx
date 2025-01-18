import { StyleModal, ModalContent } from "./Style";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, content }) => {
    // Bloquear/desbloquear scroll no body
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    
        return () => {
            document.body.style.overflow = 'auto';
        };
        }, [isOpen]);
    
        if (!isOpen) return null;
    
        return (
        <StyleModal onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
            {content}
            <button onClick={onClose}><i className="fa-regular fa-circle-xmark"></i></button>
            </ModalContent>
        </StyleModal>
        );
    };

export default Modal