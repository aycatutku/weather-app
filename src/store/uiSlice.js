import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "ui",
    initialState: {
        type:"",
        visible:false,
        message:""
    },
    reducers: {
        open_modal: (state, action) => {
            state.type = action.payload.type;
            state.message = action.payload.message;
            state.visible=true;
        },
        close_modal: (state) => {
            state.type = "";
            state.message = "";
            state.visible=false;
        },
    },
})

export const {open_modal,close_modal}=uiSlice.actions;

export default uiSlice.reducer;

