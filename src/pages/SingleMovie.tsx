import Container from '@components/base/Container'
import { useQuery } from '@tanstack/react-query'
import { getSingleMovie, getCastMovie } from '@/services/moviesService'
import { APIMOVIESIMAGESURL } from '@/api/moviesApiData'

const SingleMovie = ({ id }: { id: number }) => {
    const cast = useQuery({
        queryKey: ['singleMovieCast'],
        queryFn: () => getCastMovie(id),
    })

    const movie = useQuery({
        queryKey: ['singleMovie'],
        queryFn: () => getSingleMovie(id),
    })

    const filterCast = cast.data?.cast?.filter((c) => c.profile_path)

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
            <h2>Cast</h2>
            <div className="grid grid-cols-4 gap-4">
                {filterCast?.map((item) => (
                    <div key={item.id}>
                        <img
                            src={`${APIMOVIESIMAGESURL}${item.profile_path}`}
                            alt=""
                        />
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default SingleMovie
