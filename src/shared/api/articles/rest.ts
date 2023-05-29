import type { DateStringISO, ImageURL } from '@/globals'
import type { UserID } from '@/shared-kernel'

import { makeRequest } from '../makeRequest'
import type { ArticleApi } from './types'

type ArticlesResponse = {
    articles: {
        id: string
        createdTime: DateStringISO
        preview: ImageURL
        authorId: UserID
        title: string
    }[]
    users: {
        id: UserID
        email: string
        role: string
        name: string
    }[]
}

export const articleApi: ArticleApi = {
    async getArticles() {
        const { articles } = await makeRequest<ArticlesResponse>({
            url: '/articles',
            method: 'GET',
        })

        return {
            articles: {
                data: articles.map(article => ({
                    id: article.id,
                    title: article.title,
                    description: '',
                    image: {
                        src: article.preview,
                        alt: 'Article image',
                    },
                })),
            },
        }
    },
    async getArticle(id) {
        const { articles } = await makeRequest<ArticlesResponse>({
            url: '/articles',
            method: 'GET',
        })

        const article = articles.find(article => id === article.id)

        if (!article) {
            throw new Error()
        }

        return {
            article: {
                id: article.id,
                title: article.title,
                description: '',
                image: {
                    src: article.preview,
                    alt: 'Article image',
                },
                content: '',
            },
        }
    },
}
