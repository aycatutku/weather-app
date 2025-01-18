import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../api/baseApi';
import statusHandlerMiddleware from "../middleware/statusHandlerMiddleware";
import uiReducer from './uiSlice';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        ui:uiReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(statusHandlerMiddleware,baseApi.middleware),
});

export default store;
