import axios from 'axios'
import type { MovieProps, CreditsMovieProps } from '@/types/interfaces'

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

const apiSingleMovieData = axios.create({
    baseURL: APIMOVIESBASEURL,
    headers: HEADERSCONFIG,
    timeout: 10000,
})

apiSingleMovieData.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
)

const fetchDiscoverMovies = () => apiMoviesData.get(APIMOVIESQUERYDISCOVER)

const fetchMovieById = (id: number): Promise<MovieProps> =>
    apiSingleMovieData.get(`/movie/${id}`)
const fetchCastByMovie = (id: number): Promise<CreditsMovieProps> =>
    apiSingleMovieData.get(`/movie/${id}/credits`)

export { fetchDiscoverMovies, fetchMovieById, fetchCastByMovie }
