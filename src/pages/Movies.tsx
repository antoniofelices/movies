// import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'
import Container from '@components/base/Container'
import Card from '@components/patterns/Card'
// import allData from '@/data/pagesData/listMovies'
// import { APILABONNEURL, REQUESTCONFIG } from '@/data/apiConfigData'
// import { fetchApiData } from '@/services/apiFetch'
// import type { PostProps } from '@/types/interfaces'
// import { transformDate } from '@helpers/utils'

function Movies() {
    // const [page, setPage] = useState(1)

    const fetchMovies = async () => {
        const response = await fetch(`https://labonne.org/wp-json/wp/v2/posts`)
        return response.json()
    }

    // const query = useQuery({ queryKey: ['movies'], queryFn: fetchMovies })

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
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
                {/* <div>
                    <button onClick={() => setPage(page - 1)}>Anterior</button>
                    <button onClick={() => setPage(page + 1)}>Siguiente</button>
                </div> */}
                <div className="products">
                    {data?.map((movie) => (
                        <Card content={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Movies
