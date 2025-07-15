import { useInfiniteQuery } from '@tanstack/react-query'
import Loading from '@components/base/Loading'
import ErrorApi from '@components/base/ErrorApi'
import Container from '@components/base/Container'
import Card from '@/components/patterns/Card'
import Button from '@components/base/Button'
import { getMoviesByDiscover } from '@/services/moviesService'
import type { MovieProps } from '@/types/interfaces'

const MovieList = () => {
    const { data, error, fetchNextPage, hasNextPage, isError, isPending } =
        useInfiniteQuery({
            queryKey: ['movies'],
            queryFn: ({ pageParam = 1 }) => getMoviesByDiscover(pageParam),
            getNextPageParam: (lastPage: any) => {
                return lastPage.page < lastPage.total_pages
                    ? lastPage.page + 1
                    : undefined
            },
            initialPageParam: 1,
        })

    if (isError && error) return <ErrorApi message={error.message} />
    if (isPending) return <Loading />

    return (
        <Container>
            <h1 className="sr-only">Movies List</h1>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {data?.pages.map((page: any) =>
                        page.results.map((movie: MovieProps) => (
                            <Card
                                id={movie.id}
                                image={movie.poster_path}
                                key={movie.id}
                                title={movie.title}
                                type="movie"
                            />
                        ))
                    )}
                </div>
                {hasNextPage && (
                    <div className="mt-8 flex justify-center">
                        <Button
                            onClick={() => fetchNextPage()}
                            text="Load more"
                        />
                    </div>
                )}

                {!hasNextPage && data?.pages.length > 0 && (
                    <p className="text-center mt-8">No more movies</p>
                )}
            </div>
        </Container>
    )
}

export default MovieList
