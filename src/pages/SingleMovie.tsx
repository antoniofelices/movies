import Container from '@components/base/Container'
import { useQuery } from '@tanstack/react-query'
import { getSingleMovie, getCastMovie } from '@/services/moviesService'

const SingleMovie = ({ id }) => {
    const cast = useQuery({
        queryKey: ['singleMovieCast'],
        queryFn: () => getCastMovie(id),
    })

    const movie = useQuery({
        queryKey: ['singleMovie'],
        queryFn: () => getSingleMovie(id),
    })

    if (movie.isPending) {
        return <p>Loading movie...</p>
    }

    if (movie.isError) {
        return <p>Error {movie.error.message}</p>
    }

    return (
        <Container>
            <h1>{movie.data.title}</h1>
            <p>{movie.data.tagline}</p>
            <p>{movie.data.overview}</p>
            {/* {cast.data.map((item) => (
                <h1>{item.name}</h1>
            ))} */}
        </Container>
    )
}

export default SingleMovie
