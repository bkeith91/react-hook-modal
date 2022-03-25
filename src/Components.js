import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModalContext } from "./useModalContext";
import "./styles.css";

export const ModalHeader = () => {
    const { closeModal } = useModalContext();
    return (
        <div className={"react-hook-modal-header"}>
            <FontAwesomeIcon
                icon={faTimes}
                onClick={closeModal}
                className={"react-hook-modal-close-icon"}
            />
        </div>
    );
};

export const ModalBody = ({ children }) => {
    return <div className={"react-hook-modal-body"}>{children}</div>;
};

export const Modal = ({ showHeader, position, children }) => {
    let modalClass = "react-hook-modal";
    if (position) modalClass += ` ${position}`;
    return (
        <div className={modalClass}>
            {showHeader && <ModalHeader />}

            {children}
        </div>
    );
};

export const Backdrop = () => <div className="react-hook-modal-backdrop" />;
