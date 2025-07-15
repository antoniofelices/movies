import type {
    MovieProps,
    CreditsMovieProps,
    PersonProps,
} from '@/types/interfaces'

import { apiMoviesData } from '@/config/moviesAxiosConfig'

const getMoviesByDiscover = async (page: number = 1) => {
    const response = await apiMoviesData.get(
        `/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`
    )
    return response.data
}

const getSingleMovie = async (id: number): Promise<MovieProps> => {
    const response = await apiMoviesData.get(`/movie/${id}`)
    return response.data
}

const getCastMovie = async (id: number): Promise<CreditsMovieProps> => {
    const response = await apiMoviesData.get(`/movie/${id}/credits`)
    return response.data
}

const getPerson = async (id: number): Promise<PersonProps> => {
    const response = await apiMoviesData.get(`/person/${id}`)
    return response.data
}

const getMoviesByPerson = async (id: number): Promise<PersonProps> => {
    const response = await apiMoviesData.get(`/person/${id}/movie_credits`)
    return response.data
}

export {
    getMoviesByDiscover,
    getSingleMovie,
    getCastMovie,
    getPerson,
    getMoviesByPerson,
}
