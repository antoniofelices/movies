const APIMOVIESBASEURL = 'https://api.themoviedb.org/3'
const APIMOVIESQUERYDISCOVER = `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
const APIKEYMOVIES = import.meta.env.VITE_API_MOVIES
const APITOKENMOVIES = import.meta.env.VITE_API_MOVIES_TOKEN
const APIMOVIESIMAGESURL = 'https://image.tmdb.org/t/p/original'
const SUPABASEURL = import.meta.env.VITE_SUPABASE_URL
const SUPABASEANONKEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const HEADERSCONFIG = {
    Accept: 'application/json',
    Authorization: `Bearer ${APITOKENMOVIES}`,
}

export {
    APIMOVIESBASEURL,
    APIMOVIESQUERYDISCOVER,
    APIKEYMOVIES,
    HEADERSCONFIG,
    APIMOVIESIMAGESURL,
    APITOKENMOVIES,
    SUPABASEURL,
    SUPABASEANONKEY,
}
