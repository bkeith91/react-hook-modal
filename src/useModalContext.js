import React, { createContext, useContext } from "react";
import validateMethods from "./utils/validateMethods";

const ModalContext = createContext();

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context)
        throw new Error("`useModalContext` must be used within a `ModalProvider`.");

    return context;
};

export const ModalProvider = ({ children, ...props }) => {
    const methods = validateMethods(props);

    return (
        <ModalContext.Provider value={methods}>{children}</ModalContext.Provider>
    );
};