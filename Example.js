import React from "react";
import HookModal, { useModal } from "./src";

function App() {
    const {
        register,
        modalState: { isOpen },
        openModal,
        closeModal
    } = useModal({
        defaultIsOpen: false
    });

    return (
        <>
            <HookModal className={s.modal} {...register({ showHeader: true })}>
                <HookModal.Body className={s.modalBody}>
                    {"This is a test modal."}
                </HookModal.Body>
            </HookModal>
            <button onClick={isOpen ? closeModal : openModal}>
                {isOpen ? "Close" : "Open"}
            </button>
        </>
    );
}

export default App;
