import { ConnectionError } from '@helpers/errorsHandlers'

export async function fetchApiData(apiURL: string, requestConfig: RequestInit) {
    const response = await fetch(apiURL, requestConfig)
    if (!response.ok) {
        throw new ConnectionError(`${response.status}`)
    }
    const data = await response.json()
    return data
}
