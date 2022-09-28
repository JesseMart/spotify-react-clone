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
            getSongsByGenre: builder.query({ query : (genre) => `/charts/genre-world?genre_code=${genre}`}),
            getSongsByCountry: builder.query({ query : (countryCode) => `/charts/country?country?country_code=${countryCode}`}),
            getSongsBySearch: builder.query({ query : (searchTerm) => `/search/multi?search_type=SONGS_ARTIST&query=${searchTerm}`}),
            getArtistDetails: builder.query({ query : (artistId) => `/artists/details?artist_id=${artistId}`}),
            getSongDetails: builder.query({ query : ({ songid }) => `/tracks/details?track_id=${songid}`}),
            getSongRelated: builder.query({ query : ({ songid }) => `/tracks/related?track_id=${songid}`}),
        })
    });

    export const {
        useGetTopChartsQuery, 
        useGetSongsByGenreQuery,
        useGetSongsByCountryQuery,
        useGetSongBySearchQuery,
        useGetArtistDetailsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
    } = shazamCoreApi;