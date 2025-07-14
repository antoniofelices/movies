import { useQuery } from '@tanstack/react-query'
import Loading from '@components/base/Loading'
import ErrorApi from '@components/base/ErrorApi'
import Container from '@components/base/Container'
import Card from '@components/patterns/Card'
import ButtonBack from '@components/base/ButtonBack'

import { getSingleMovie, getCastMovie } from '@/services/moviesService'
import { APIMOVIESIMAGESURL } from '@/config/config'
import type { CastProps } from '@/types/interfaces'

const SingleMovie = ({ id }: { id: number }) => {
    const {
        data: castData,
        isPending: castLoading,
        isError: castError,
        error: castErrorType,
    } = useQuery({
        queryKey: ['singleMovieCast', id],
        queryFn: () => getCastMovie(id),
    })

    const {
        data: movie,
        isPending: movieLoading,
        isError: movieError,
        error: movieErrorType,
    } = useQuery({
        queryKey: ['singleMovie', id],
        queryFn: () => getSingleMovie(id),
    })

    const filterCast = castData?.cast?.filter((c) => c.profile_path)

    if (movieLoading || castLoading) return <Loading />

    if (movieError && movieError)
        return <ErrorApi message={movieErrorType.message} />
    if (castError && castErrorType)
        return <ErrorApi message={castErrorType.message} />

    return (
        <Container>
            <article>
                <div className="grid lg:grid-cols-3 gap-7 place-content-between">
                    {movie.poster_path && (
                        <img
                            src={`${APIMOVIESIMAGESURL}${movie.poster_path}`}
                            alt={`movie poster ${movie.title}`}
                        />
                    )}
                    <div className="lg:col-start-2 lg:col-end-4">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            {movie.title}
                        </h1>
                        <p className="py-8 font-bold">{movie.tagline}</p>
                        <p className="max-w-2xl my-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            {movie.overview}
                        </p>
                    </div>
                </div>

                <h2 className="max-w-2xl my-8 text-3xl font-extrabold tracking-tight leading-none md:text-3xl">
                    Cast
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {filterCast?.map((person: CastProps) => (
                        <Card
                            id={person.id}
                            image={person.profile_path}
                            key={person.id}
                            title={person.name}
                            type="person"
                        />
                    ))}
                </div>
            </article>
            <ButtonBack />
        </Container>
    )
}

export default SingleMovie
