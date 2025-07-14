import { useQuery } from '@tanstack/react-query'
import Loading from '@components/base/Loading'
import ErrorApi from '@components/base/ErrorApi'
import Container from '@components/base/Container'
import ButtonBack from '@components/base/ButtonBack'

import { getPerson } from '@/services/moviesService'
import { APIMOVIESIMAGESURL } from '@/config/config'

const SinglePerson = ({ id }: { id: number }) => {
    const {
        data: personData,
        isPending: personLoading,
        isError: personError,
        error: personErrorType,
    } = useQuery({
        queryKey: ['singlePerson', id],
        queryFn: () => getPerson(id),
    })

    // const {
    //     data: movie,
    //     isPending: movieLoading,
    //     isError: movieError,
    //     error: movieErrorType,
    // } = useQuery({
    //     queryKey: ['singleMovie', id],
    //     queryFn: () => getSingleMovie(id),
    // })

    if (personLoading) return <Loading />

    if (personError && personErrorType)
        return <ErrorApi message={personErrorType.message} />

    return (
        <Container>
            <article>
                <div className="grid lg:grid-cols-3 gap-7 place-content-between">
                    {personData.profile_path && (
                        <img
                            src={`${APIMOVIESIMAGESURL}${personData.profile_path}`}
                            alt={`movie poster ${personData.name}`}
                        />
                    )}
                    <div className="lg:col-start-2 lg:col-end-4">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            {personData.name}
                        </h1>
                        <p className="py-8 font-bold">
                            {personData.place_of_birth}
                        </p>
                        <p className="max-w-2xl my-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            {personData.biography}
                        </p>
                    </div>
                </div>

                <h2 className="max-w-2xl my-8 text-3xl font-extrabold tracking-tight leading-none md:text-3xl">
                    Filmography
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6"></div>
            </article>
            <ButtonBack />
        </Container>
    )
}

export default SinglePerson
