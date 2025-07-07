// import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Container from '@components/base/Container'
import Card from '@components/patterns/Card'
// import allData from '@/data/pagesData/listMovies'
import { getMoviesByDiscover } from '@/services/moviesService'
// import type { PostProps } from '@/types/interfaces'
// import { transformDate } from '@helpers/utils'

function Movies() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movies'],
        queryFn: () => getMoviesByDiscover(),
    })

    if (isPending) {
        return <p>Recuperando los productos...</p>
    }

    if (isError) {
        return <p>Error {error.message}</p>
    }

    return (
        <Container>
            <h1>List Movies</h1>
            <div>
                <div className="products">
                    {data?.results.map((movie) => (
                        <Card content={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Movies
