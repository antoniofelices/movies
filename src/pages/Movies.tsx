/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import Container from '@components/base/Container'
import MovieCard from '@/components/patterns/MovieCard'
// import allData from '@/data/pagesData/listMovies'
import { getMoviesByDiscover } from '@/services/moviesService'
import type { MovieProps } from '@/types/interfaces'

function Movies() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movies'],
        queryFn: () => getMoviesByDiscover(),
    })

    if (isPending) {
        return <p>Loading movies...</p>
    }

    if (isError) {
        return <p>Error {error.message}</p>
    }

    return (
        <Container>
            <h1>List Movies</h1>
            <div>
                <div className="grid grid-cols-3 gap-4">
                    {(data as any)?.results.map((movie: MovieProps) => (
                        <MovieCard content={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Movies
