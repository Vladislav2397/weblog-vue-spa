export function isNullable(value: unknown) {
    return value === null || typeof value === 'undefined'
}
