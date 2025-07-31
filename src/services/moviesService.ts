import type {
    MovieProps,
    CreditsMovieProps,
    PersonProps,
} from '@/types/interfaces'

import { apiMoviesData } from '@/db/axiosConfig'
import { ConnectionError } from '@helpers/errorsHandlers'
import { AxiosError } from 'axios'

const getMoviesByDiscover = async (page: number = 1) => {
    try {
        const response = await apiMoviesData.get(
            `/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`
        )
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new ConnectionError(
                `${error.response?.status || 'Network Error'}`
            )
        }
        throw new ConnectionError('Network Error')
    }
}

const getSingleMovie = async (id: number): Promise<MovieProps> => {
    try {
        const response = await apiMoviesData.get(`/movie/${id}`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new ConnectionError(
                `${error.response?.status || 'Network Error'}`
            )
        }
        throw new ConnectionError('Network Error')
    }
}

const getCastMovie = async (id: number): Promise<CreditsMovieProps> => {
    try {
        const response = await apiMoviesData.get(`/movie/${id}/credits`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new ConnectionError(
                `${error.response?.status || 'Network Error'}`
            )
        }
        throw new ConnectionError('Network Error')
    }
}

const getPerson = async (id: number): Promise<PersonProps> => {
    try {
        const response = await apiMoviesData.get(`/person/${id}`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new ConnectionError(
                `${error.response?.status || 'Network Error'}`
            )
        }
        throw new ConnectionError('Network Error')
    }
}

const getMoviesByPerson = async (id: number): Promise<PersonProps> => {
    try {
        const response = await apiMoviesData.get(`/person/${id}/movie_credits`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new ConnectionError(
                `${error.response?.status || 'Network Error'}`
            )
        }
        throw new ConnectionError('Network Error')
    }
}

export {
    getMoviesByDiscover,
    getSingleMovie,
    getCastMovie,
    getPerson,
    getMoviesByPerson,
}
