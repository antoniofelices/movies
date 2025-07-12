import { useQuery } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import Loading from '@components/base/Loading'
import ErrorApi from '@components/base/ErrorApi'

import Container from '@components/base/Container'
import Button from '@/components/base/Button'
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
            <h1>{movie.title}</h1>
            <p>{movie.tagline}</p>
            <p>{movie.overview}</p>
            <Button onClick={backHandler} text="back" />
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
