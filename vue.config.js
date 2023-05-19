const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isGithubPagesProd = process.env.HOSTING === 'github-pages'

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: isGithubPagesProd && isProd ? '/weblog-vue-spa/' : '/',

    pages: {
        index: {
            entry: 'src/app/app.ts',
        },
    },

    css: {
        loaderOptions: {
            scss: {
                //
            },
        },
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, './src/app/styles/utility/utils.scss'),
            ],
        },
    },

    chainWebpack(config) {
        config.module
            .rule('pug')
            .oneOf('vue-loader')

            .use('pug-bem')
            .loader('pug-bem-plain-loader')
            .options({
                b: true,
            })
            .end()

        config.module
            .rule('pug')
            .oneOf('raw-pug-files')

            .use('pug-bem')
            .loader('pug-bem-plain-loader')
            .options({
                b: true,
            })
            .end()
    },
})
