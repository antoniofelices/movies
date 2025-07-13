import { useQuery } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import Loading from '@components/base/Loading'
import ErrorApi from '@components/base/ErrorApi'

import Container from '@components/base/Container'
import { getSingleMovie, getCastMovie } from '@/services/moviesService'
import { APIMOVIESIMAGESURL } from '@/config/config'

const SingleMovie = ({ id }: { id: number }) => {
    const router = useRouter()

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

    const backHandler = () => {
        router.history.back()
    }

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
                    {filterCast?.map((item) => (
                        <div key={item.id}>
                            <img
                                src={`${APIMOVIESIMAGESURL}${item.profile_path}`}
                                alt=""
                            />
                            <div className="bg-white dark:bg-blue-500 p-4 lg:mx-0">
                                <h3 className="text-sm font-bold">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
            <button
                onClick={backHandler}
                className="flex gap-2 items-center mt-8"
            >
                {' '}
                <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.707 3.293a1 1 0 00-1.414 0l-6 6a1 1 0 000 1.414l6 6a1 1 0 001.414-1.414L5.414 11H17a1 1 0 100-2H5.414l4.293-4.293a1 1 0 000-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                Back
            </button>
        </Container>
    )
}

export default SingleMovie
