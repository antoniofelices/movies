import axios from 'axios'
import { APIMOVIESBASEURL, HEADERSCONFIG } from '@/config/config'

const apiMoviesData = axios.create({
    baseURL: APIMOVIESBASEURL,
    headers: HEADERSCONFIG,
    timeout: 10000,
})

export { apiMoviesData }
