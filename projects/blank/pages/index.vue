<template>
    <div>
        <h1>Добро пожаловать в пустое корыто</h1>
        <div>
            <Logo />
        </div>
    </div>
</template>


<script>
    import { meta } from '~~/assets/meta';
    import Logo from '~~/assets/img/logos/amocrm.svg?inline';

    export default {
        components: {
            Logo
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
