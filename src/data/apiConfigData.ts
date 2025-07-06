const APIMOVIES =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
const APIKEYMOVIES = import.meta.env.VITE_API_MOVIES
const APITOKENMOVIES = import.meta.env.VITE_API_MOVIES_TOKEN

const REQUESTCONFIG: RequestInit = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${APITOKENMOVIES}`,
    },
}

export { APIMOVIES, APIKEYMOVIES, REQUESTCONFIG }
