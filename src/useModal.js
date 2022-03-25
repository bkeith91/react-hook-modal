import { useState } from "react";

export const useModal = ({ defaultIsOpen }) => {
    const [modalState, setModalState] = useState({
        isOpen: defaultIsOpen || false
    });

    const openModal = () => setModalState({ isOpen: true });
    const closeModal = () => setModalState({ isOpen: false });
    const register = ({ showHeader, showBackdrop, position }) => ({
        options: { showHeader, showBackdrop, position },
        modalState,
        closeModal
    });

    return {
        register,
        modalState,
        openModal,
        closeModal
    };
};