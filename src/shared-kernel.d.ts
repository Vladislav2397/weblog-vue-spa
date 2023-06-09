import type { BrandedType, TimeStamp } from './globals'

export type ArticleId = BrandedType<number>
export type Article = {
    id: ArticleId
    image: Image
    title: string
    description: string
    content: string
}

export type UserID = BrandedType<string>
export type User = {
    id: UserID
    email: string
    role: string
    name: string
}

export type CommentId = BrandedType<number>
export type Comment = {
    id: CommentId
    author: string
    text: string
    created: TimeStamp
}
