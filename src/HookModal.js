import React from "react";
import ReactDOM from "react-dom";
import { Backdrop, Modal, ModalBody } from "./Components";
import { ModalProvider } from "./useModalContext";

const HookModal = ({ children, options, ...methods }) => {
    if (!methods?.modalState)
        throw new Error("`HookModal` must `register` with `useModal`.");

    if (!methods.modalState.isOpen) return null;

    return ReactDOM.createPortal(
        <ModalProvider {...methods}>
            {options.showBackdrop && <Backdrop />}
            <Modal {...options}>{children}</Modal>
        </ModalProvider>,
        document.body
    );
};

HookModal.Body = ModalBody;

export default HookModal;
