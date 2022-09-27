import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



    export const shazamCoreApi = createApi({
        reducerPAth: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'a92945e334mshd8eabece9b2af16p1aec92jsna7aff7fdaf92')

                return headers;
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query : () => '/charts/world'}),
        })
    });

    export const {
        useGetTopChartsQuery, 
    } = shazamCoreApi;