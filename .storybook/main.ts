import type { StorybookConfig } from '@storybook/vue-webpack5'
import path from 'path'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/vue-webpack5',
        options: {},
    },
    webpackFinal(config) {
        if (config.resolve?.alias) {
            config.resolve.alias['@'] = path.resolve(__dirname, '../src/')
        }
        if (config.resolve?.extensions) {
            config.resolve.extensions = [...config.resolve.extensions, '.ts', '.js']
        }

        config.module?.rules?.push({
            test: /\.pug$/,
            use: [
                {
                    loader: 'pug-bem-plain-loader',
                    options: {
                        b: true, // default 'b-'
                        e: '__',
                        m: '--'
                    }
                }
            ],
        })
        config.module?.rules?.push({
            test: /\.scss$/,
            sideEffects: true,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        additionalData: '@import "~@/app/styles/utility/utils-storybook.scss";',
                    },
                },
            ],
        })
        return config
    },
    docs: {
        autodocs: 'tag',
    },
}
export default config
