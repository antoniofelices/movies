import axios from 'axios'
import type {
    MovieProps,
    CreditsMovieProps,
    PersonProps,
} from '@/types/interfaces'

import {
    APIMOVIESBASEURL,
    HEADERSCONFIG,
    APIMOVIESQUERYDISCOVER,
} from '@/config/config'

const apiMoviesData = axios.create({
    baseURL: APIMOVIESBASEURL,
    headers: HEADERSCONFIG,
    timeout: 10000,
})

apiMoviesData.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
)

const fetchDiscoverMovies = () => apiMoviesData.get(APIMOVIESQUERYDISCOVER)

const fetchMovieById = (id: number): Promise<MovieProps> =>
    apiMoviesData.get(`/movie/${id}`)

const fetchCastByMovie = (id: number): Promise<CreditsMovieProps> =>
    apiMoviesData.get(`/movie/${id}/credits`)

const fetchPersonById = (id: number): Promise<PersonProps> =>
    apiMoviesData.get(`/person/${id}`)

const fetcMoviesByPerson = (id: number): Promise<PersonProps> =>
    apiMoviesData.get(`/person/${id}/credits`)

export {
    fetchDiscoverMovies,
    fetchMovieById,
    fetchCastByMovie,
    fetchPersonById,
    fetcMoviesByPerson,
}
