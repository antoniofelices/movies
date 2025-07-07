import {
    fetchDiscoverMovies,
    fetchMovieById,
    fetchCastByMovie,
} from '@/api/moviesAxiosConfig'

const getMoviesByDiscover = async () => {
    const response = await fetchDiscoverMovies()
    return response
}

const getSingleMovie = async (id) => {
    const response = await fetchMovieById(id)
    return response
}

const getCastMovie = async (id) => {
    const response = await fetchCastByMovie(id)
    return response
}

export { getMoviesByDiscover, getSingleMovie, getCastMovie }
