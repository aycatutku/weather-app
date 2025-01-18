import React from "react";
import {LoadingModal} from "./LoadingModal";
import {ErrorModal} from "./ErrorModal";

export const ModalController = () => {
    return(
        <>
            <LoadingModal/>
            <ErrorModal/>
        </>
    )
}
