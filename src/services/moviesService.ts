import type {
    MovieProps,
    CreditsMovieProps,
    PersonProps,
} from '@/types/interfaces'

import { apiMoviesData } from '@/config/moviesAxiosConfig'

const fetchDiscoverMovies = (page: number = 1) =>
    apiMoviesData.get(
        `/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`
    )

const fetchMovieById = (id: number): Promise<MovieProps> =>
    apiMoviesData.get(`/movie/${id}`)

const fetchCastByMovie = (id: number): Promise<CreditsMovieProps> =>
    apiMoviesData.get(`/movie/${id}/credits`)

const fetchPersonById = (id: number): Promise<PersonProps> =>
    apiMoviesData.get(`/person/${id}`)

const fetcMoviesByPerson = (id: number): Promise<PersonProps> =>
    apiMoviesData.get(`/person/${id}/movie_credits`)

const getMoviesByDiscover = async (page: number = 1) => {
    const response = await fetchDiscoverMovies(page)
    // const response = await apiMoviesData.get(
    //     `/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`
    // )
    return response
}

const getSingleMovie = async (id: number) => {
    const response = await fetchMovieById(id)
    // const response = await apiMoviesData.get(`/movie/${id}`)
    return response
}

const getCastMovie = async (id: number) => {
    const response = await fetchCastByMovie(id)
    // const response = await apiMoviesData.get(`/movie/${id}/credits`)
    return response
}

const getPerson = async (id: number) => {
    const response = await fetchPersonById(id)
    // const response = await apiMoviesData.get(`/person/${id}`)
    return response
}

const getMoviesByPerson = async (id: number) => {
    const response = await fetcMoviesByPerson(id)
    // const response = await apiMoviesData.get(`/person/${id}/movie_credits`)
    return response
}

export {
    getMoviesByDiscover,
    getSingleMovie,
    getCastMovie,
    getPerson,
    getMoviesByPerson,
}
