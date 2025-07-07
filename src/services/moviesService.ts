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
    return response.data
}

const getCastMovie = async (id) => {
    const response = await fetchCastByMovie(id)
    return response.data
}

export { getMoviesByDiscover, getSingleMovie, getCastMovie }
