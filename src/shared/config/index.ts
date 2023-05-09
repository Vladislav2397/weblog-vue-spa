/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */
const getEnvVar = (key: string) => {
    if (process.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`)
    }
    return process.env[key] || ''
}

/** API entrypoint */
// export const API_URL = getEnvVar("VITE_APP_API_URL");

/** Режим запуска программы */
/** Режим разработки */
// export const isDevEnv = getEnvVar("DEV"); // Vite feature
/** Режим продакшена */
// export const isProdEnv = getEnvVar("PROD"); // Vite feature

export const ENV = {
    API_KEY: getEnvVar('VUE_APP_FIREBASE_API_KEY'),
    AUTH_DOMAIN: getEnvVar('VUE_APP_FIREBASE_AUTH_DOMAIN'),
    STORAGE_BUCKET: getEnvVar('VUE_APP_FIREBASE_STORAGE_BUCKET'),
    MESSAGING_SENDER_ID: getEnvVar('VUE_APP_FIREBASE_MESSAGING_SENDER_ID'),
    APP_ID: getEnvVar('VUE_APP_FIREBASE_APP_ID'),
    NODE_ENV: getEnvVar('NODE_ENV'),
}
