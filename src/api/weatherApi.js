import { baseApi } from './baseApi';

export const weatherApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCityByCoords: builder.query({
            query: ({ lat, lon }) =>
                `data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8957b3d4f03a5fbd416f13547916863a`,
        }),
        getCityWeather: builder.query({
            query: (city) =>
                `data/2.5/weather?q=${city}&units=metric&appid=8957b3d4f03a5fbd416f13547916863a`,
        }),
    }),
    overrideExisting: true,
});

export const {
    useGetCityByCoordsQuery,
    useGetCityWeatherQuery,
    useLazyGetCityByCoordsQuery,
} = weatherApi;
