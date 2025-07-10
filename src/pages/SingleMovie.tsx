import { useQuery } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
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
        error: castErr,
    } = useQuery({
        queryKey: ['singleMovieCast', id],
        queryFn: () => getCastMovie(id),
    })

    const {
        data: movie,
        isPending: movieLoading,
        isError: movieError,
        error: movieErr,
    } = useQuery({
        queryKey: ['singleMovie', id],
        queryFn: () => getSingleMovie(id),
    })

    const filterCast = castData?.cast?.filter((c) => c.profile_path)

    if (movieLoading) return <p>Loading movie...</p>
    if (movieError)
        return <div>Error al cargar la película: {movieErr.message}</div>

    if (castLoading) return <div>Cargando reparto...</div>
    if (castError)
        return <div>Error al cargar el reparto: {castErr.message}</div>

    const backHandler = () => {
        router.history.back()
    }

    return (
        <Container>
            <h1>{movie.title}</h1>
            <p>{movie.tagline}</p>
            <p>{movie.overview}</p>
            <Button onClick={backHandler} text="Volver" />
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
