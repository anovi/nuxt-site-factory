const serveStatic = require('serve-static');

import 'core-js/stable';
import 'regenerator-runtime/runtime';

export default {

    dev: (process.env.NODE_ENV !== 'production'),

    rootDir: __dirname,

    generate: {
        routes: ['404'],
    },

    env: {
        baseUrl: process.env.BASE_URL || (process.env.NODE_ENV === 'production' ? 'finolog.ru' : 'stage.fnlg.ru'),

        intercom_app_id: 'ynipma9w',
    },

    router: {
        scrollBehavior(to, from, savedPosition) {
            return {x: 0, y: 0};
        }
    },

    head: {
        link: [
            /* {rel: 'stylesheet', type: 'text/css', href: 'https://XXXXXXXXx.css'}, */
        ],
        script: [
            { src: '//polyfill.io/v3/polyfill.min.js?flags=gated', async: true },
        ],
    },

    /*
     ** Customize the progress bar color
     */
    loading: {color: '#547EFE'},

    serverMiddleware: [
        // https://nuxtjs.org/api/configuration-servermiddleware
        {path: '/', handler: serveStatic(__dirname + '/static')},
    ],

    /*
     ** Build configuration
     */
    build: {

        babel: {
            babelrc: true,
        },

        /*
         ** Run ESLint on save
         */
        extend(config) {
            config.devtool = 'source-map';

            config.module.rules.push({
                test: /\.svg$/,
                oneOf: [
                    {
                        resourceQuery: /inline/,
                        use: [
                            'babel-loader',
                            {
                                loader: 'vue-svg-loader',
                                options: {
                                    svgo: {
                                        plugins: [
                                            {prefixIds: false}, // Disables prefixing for SVG IDs
                                            {cleanupIDs: false}, // Disables removeing IDs
                                            {removeViewBox: false}, // Disables removeing viewBox attribute
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                    {
                        loader: 'file-loader',
                        query: {
                            name: 'assets/[name].[hash:8].[ext]',
                        },
                    },
                ],
            });
        },
    },

    modules: [
        '@bazzite/nuxt-optimized-images',
    ],

    optimizedImages: {
        handleImages: ['jpeg', 'png', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: true,
        imagesName: ({isDev}) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
        responsive: {
            name: 'img/[name]-[width].[ext]',
            sizes: ['300', '576', '768', '992', '1200', '1920'],
            placeholder: false,
            quality: 65,
            adapter: require('./responsive-loader-adapter.js'),
        },
        mozjpeg: {
            quality: 65,
        },
    },

};
