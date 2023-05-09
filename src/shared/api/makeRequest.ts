// @ts-ignore
import fetch from 'isomorphic-fetch'

type RequestOptions = {
    url: string
    method?: 'GET' | 'POST'
    data?: unknown
}

// TODO: Realize makeRequest
export const makeRequest = <T>({ url }: RequestOptions): Promise<T> =>
    new Promise((resolve, reject) => {
        fetch(`http://localhost:8000/api${url}`)
            .then((r: any) => {
                resolve(r.json())
            })
            .catch(reject)
    })
