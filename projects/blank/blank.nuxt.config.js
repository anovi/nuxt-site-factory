import commonConfig from '../../common.nuxt.config';
import path from 'path';

export default Object.assign({}, commonConfig, {

    srcDir: __dirname,
    rootDir: path.resolve(__dirname, '../..'),

    generate: {
        dir: 'build/blank/',
    },

    /*
     ** Headers of the page
     */
    head: Object.assign({}, commonConfig.head, {
        titleTemplate: null,
        link: [
            ...commonConfig.head.link,
            /* { rel: 'stylesheet', type: 'text/css', href: '//XXXXXXXXXXXXX.css' }, */
        ],
        script: [
            ...commonConfig.head.script,
            /* { src: '//polyfill.io/v3/polyfill.min.js?flags=gated', async: true }, */
        ],
    }),

    /*
    ** Global CSS
    */
    styleResources: {
        stylus: ['setka/index.styl', '~~/assets/var.styl'],
    },

    plugins: [
        ...commonConfig.plugins,
        { src: '~~/plugins/global.js', ssr: true },
        { src: '~~/plugins/cookie.js', ssr: false },
    ],

    modules: [
        ...commonConfig.modules,
        /* ['~~/modules/facebook-pixel', {
            track: 'PageView',
            pixelId: 'XXXXXXXXXXXXX',
        }], */
        /* ['~~/modules/yandex-metrika', {
            // https://github.com/nuxt-community/modules/tree/master/packages/yandex-metrika
            id: 'XXXXXXXXXXXXX',
            webvisor: true,
            clickmap: true,
            // useCDN:false,
            trackLinks: true,
            accurateTrackBounce: true,
        }], */
        /* ['@nuxtjs/google-analytics', {
            id: 'XXXXXXXXXXXXX',
            debug: {
                sendHitTask: process.env.NODE_ENV === 'production',
            },
        }], */
        '@nuxtjs/style-resources',
    ],

});
