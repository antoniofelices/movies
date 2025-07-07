import axios from 'axios'

import {
    APIMOVIESBASEURL,
    HEADERSCONFIG,
    APIMOVIESQUERYDISCOVER,
} from '@/api/moviesApiData'

const apiMoviesData = axios.create({
    baseURL: APIMOVIESBASEURL,
    headers: HEADERSCONFIG,
    timeout: 10000,
})

apiMoviesData.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
)

// const rawApiMovies = axios.create({
//     baseURL: APIMOVIESBASEURL,
//     headers: HEADERSCONFIG,
//     timeout: 3000,
// })

const fetchDiscoverMovies = () => apiMoviesData.get(APIMOVIESQUERYDISCOVER)

export { fetchDiscoverMovies }
