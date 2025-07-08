import axios from 'axios'

import {
    APIMOVIESBASEURL,
    HEADERSCONFIG,
    APIMOVIESQUERYDISCOVER,
} from '@/api/moviesApiData'

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

const fetchDiscoverMovies = () => apiMoviesData.get(APIMOVIESQUERYDISCOVER)
const fetchMovieById = (id: number) => apiSingleMovieData.get(`/movie/${id}`)
const fetchCastByMovie = (id: number) =>
    apiSingleMovieData.get(`/movie/${id}/credits`)

export { fetchDiscoverMovies, fetchMovieById, fetchCastByMovie }
