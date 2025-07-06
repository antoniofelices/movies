import { useState, useEffect } from 'react'
import Container from '@components/base/Container'
// import allData from '@/data/pagesData/listMovies'
import { APILABONNEURL, REQUESTCONFIG } from '@/data/apiConfigData'
import { fetchApiData } from '@/services/apiFetch'
import type { PostProps } from '@/types/interfaces'
// import { transformDate } from '@helpers/utils'

function Movies() {
    const [data, getData] = useState<PostProps[]>([])

    const fetchData = async () => {
        const result = await fetchApiData(APILABONNEURL, REQUESTCONFIG)
        getData(result)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container>
            <h1>List Movies</h1>
            {/* {data.map((item) => (
                <div key={item.id} className="py-4">
                    <a href={item.link}>
                        <h2
                            className="text-2xl font-bold text-blue-900 lg:text-3xl"
                            dangerouslySetInnerHTML={{
                                __html: item.title.rendered,
                            }}
                        />
                    </a>
                    <p
                        className="text-xs py-4"
                        dangerouslySetInnerHTML={{
                            __html: transformDate(item.date),
                        }}
                    />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: item.excerpt.rendered,
                        }}
                    />
                </div>
            ))} */}
        </Container>
    )
}

export default Movies
