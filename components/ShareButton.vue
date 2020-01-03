<template>
    <button type="button" @click="onShareButtonClick">
        <slot name="share-button"></slot>
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: '',
                required: true,
            },
        },

        computed: {
            popupWidth() {
                return window.innerWidth / 2;
            },

            popupHeight() {
                return window.innerHeight / 2;
            },
        },

        methods: {

            onShareButtonClick(e) {
                e.preventDefault();
                this[this.type]();
            },

            popupWindow(url, title = '') {
                const left = (screen.width / 2) - (this.popupWidth / 2);
                const top = (screen.height / 2) - (this.popupHeight / 2);

                return window.open(url, title, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${this.popupWidth}, height = ${this.popupHeight}, top=${top}, left=${left}`);
            },

            getMetaData(tag) {
                const metaTags = Array.from(document.getElementsByTagName('meta'));
                const result = metaTags.find(element => element.getAttribute('property') === tag || element.getAttribute('name') === tag);

                return result ? result.getAttribute('content') : '';
            },

            getPageUrl() {
                return encodeURIComponent(window.location.href);
            },

            facebook() {
                const url = `https://www.facebook.com/sharer/sharer.php?u=${this.getPageUrl()}`;

                this.popupWindow(url);
            },

            vkontakte() {
                let url = 'http://vkontakte.ru/share.php?';

                url += `url=${this.getPageUrl()}`;
                url += `&title=${encodeURIComponent(this.getMetaData('og:title'))}`;
                url += `&description=${encodeURIComponent(this.getMetaData('og:description'))}`;
                this.popupWindow(url);
            },

            linkedin() {
                let url = 'https://www.linkedin.com/shareArticle?mini=true&';

                url += `url=${this.getPageUrl()}`;
                url += `&title=${encodeURIComponent(this.getMetaData('og:title'))}`;
                url += `&summary=${encodeURIComponent(this.getMetaData('og:description'))}`;
                this.popupWindow(url);
            },

            twitter() {
                const url = `https://twitter.com/home?status=${encodeURIComponent(this.getMetaData('twitter:text') || `${this.getMetaData('og:title')} ${window.location.href}`)}`;

                this.popupWindow(url);
            },

            google() {
                const url = `https://plus.google.com/share?url=${this.getPageUrl()}`;

                this.popupWindow(url);
            },

            odnoklassniki() {
                const url = `https://connect.ok.ru/offer?url=${this.getPageUrl()}&title=${encodeURIComponent(this.getMetaData('twitter:title'))}&imageUrl=${encodeURIComponent(this.getMetaData('twitter:image'))}`;

                this.popupWindow(url);
            },
        },
    };
</script>
