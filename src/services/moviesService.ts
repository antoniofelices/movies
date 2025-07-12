import {
    fetchDiscoverMovies,
    fetchMovieById,
    fetchCastByMovie,
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

export { getMoviesByDiscover, getSingleMovie, getCastMovie }
