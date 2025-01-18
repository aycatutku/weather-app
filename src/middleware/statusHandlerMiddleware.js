import {isPending, isRejectedWithValue} from "@reduxjs/toolkit";
import {Middleware} from "@reduxjs/toolkit";
import {open_modal} from "../store/uiSlice";

export const statusHandlerMiddleware: Middleware = (store) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        store.dispatch(open_modal({type: "error", message: action.payload.data.message}))
    } else if (isPending(action)) {
        store.dispatch(open_modal({type: "loading"}));
    }
    return next(action);
};


export default statusHandlerMiddleware;
