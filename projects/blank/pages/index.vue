<template>
    <div>
        <h1>Добро пожаловать в пустое корыто</h1>
        <div>
            <p>Inline SVG:</p>
            <InlineSVG />

            <p>External SVG as image:</p>
            <img :src="require('~~/assets/img/svg/app-store-badge-en-black.svg')" />

            <p>Lazy loaded and optimized image:</p>
            <img v-lazy="require('~~/assets/img/jaanus-jagomagi-7zKHUG68E2k-unsplash.jpg')" width="184" height="184"/>

            <p>Optimized PNG image:</p>
            <img :src="require('~~/assets/img/finolog-pattern-contrast.png')" alt="">

        </div>
    </div>
</template>


<script>
    import { meta } from '~~/utils/meta';

    // Note the `?inline` query string
    import InlineSVG from '~~/assets/img/svg/app-store-badge-en-black.svg?inline';

    export default {
        components: {
            InlineSVG,
        },
        head: {
            title: 'MY SITE',
            meta: meta({
                'og:title': 'MY SITE',
                'og:type': 'website',
                'og:url': 'https://indesigner.ru/',
                'og:image': 'https://indesigner.ru',
                'og:description': 'MY SITE',

                'twitter:card': 'summary_large_image',
                'twitter:site': '@MY_SITE',
                'twitter:creator': '@MY_SITE',
                'twitter:url': 'https://indesigner.ru/',
                'twitter:title': 'MY SITE',
                'twitter:description': 'MY SITE',
                'twitter:text': 'MY SITE https://indesigner.ru/',
                'twitter:image': 'https://indesigner.ru/',
            }),
        },
    };
</script>
