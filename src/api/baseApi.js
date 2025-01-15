import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openweathermap.org/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
        params: {
            appid: '8957b3d4f03a5fbd416f13547916863a',
        },
    }),
    endpoints: () => ({}),
    overrideExisting:true
});

export default baseApi;

