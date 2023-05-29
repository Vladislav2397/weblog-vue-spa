// @ts-ignore
import fetch from 'isomorphic-fetch'
import { ENV } from '../config'

type RequestOptions = {
    url: string
    method?: 'GET' | 'POST'
    data?: unknown
}

// TODO: Realize makeRequest
export const makeRequest = <T>({ url, method }: RequestOptions): Promise<T> =>
    new Promise((resolve, reject) => {
        const path = [ENV.API_HOST, ENV.API_PREFIX, url].join('')

        fetch(path, {
            method,
        })
            .then((r: any) => {
                resolve(r.json())
            })
            .catch(reject)
    })
