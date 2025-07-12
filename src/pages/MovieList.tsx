import { useQuery } from '@tanstack/react-query'
import Loading from '@components/base/Loading'
import ErrorApi from '@components/base/ErrorApi'
import Container from '@components/base/Container'
import MovieCard from '@/components/patterns/MovieCard'
import { getMoviesByDiscover } from '@/services/moviesService'
import type { MovieProps } from '@/types/interfaces'

const MovieList = () => {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movies'],
        queryFn: () => getMoviesByDiscover(),
    })

    if (isError && error) return <ErrorApi message={error.message} />
    if (isPending) return <Loading />

    return (
        <Container>
            <h1 className="sr-only">Movies List</h1>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {(data as any)?.results.map((movie: MovieProps) => (
                        <MovieCard content={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default MovieList
