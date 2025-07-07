import { fetchDiscoverMovies } from '@/api/moviesAxiosConfig'

const getMoviesByDiscover = async () => {
    const response = await fetchDiscoverMovies()
    return response
}

export { getMoviesByDiscover }
