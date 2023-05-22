/* HELPERS */
export type Maybe<T> = T | null
export type PartialPick<T, U extends keyof T> = Partial<Pick<T, U>>
export type BrandedType<T, U = 'BrandedType'> = T & { __tag?: U }

export type TimeStamp = BrandedType<string>

export type Image = {
    src: string
    alt: string
}

// declare namespace global {
//     type BrandedType<T, U = 'BrandedType'> = T & { __tag?: U }
// }
