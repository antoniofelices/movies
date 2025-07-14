import {
    fetchDiscoverMovies,
    fetchMovieById,
    fetchCastByMovie,
    fetchPersonById,
    fetcMoviesByPerson,
} from '@/config/moviesAxiosConfig'

const getMoviesByDiscover = async () => {
    const response = await fetchDiscoverMovies()
    return response
}

const getSingleMovie = async (id: number) => {
    const response = await fetchMovieById(id)
    return response
}

const getCastMovie = async (id: number) => {
    const response = await fetchCastByMovie(id)
    return response
}

const getPerson = async (id: number) => {
    const response = await fetchPersonById(id)
    return response
}

const getMoviesByPerson = async (id: number) => {
    const response = await fetcMoviesByPerson(id)
    return response
}

export {
    getMoviesByDiscover,
    getSingleMovie,
    getCastMovie,
    getPerson,
    getMoviesByPerson,
}
