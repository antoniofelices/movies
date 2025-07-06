const APILABONNEURL = 'https://labonne.org/wp-json/wp/v2/posts'

const REQUESTCONFIG: RequestInit = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
}

export { APILABONNEURL, REQUESTCONFIG }
