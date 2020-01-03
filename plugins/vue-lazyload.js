/* eslint-disable */

import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
    observer: !!window.IntersectionObserver,
    observerOptions: {
        rootMargin: '50% 0px 0px 0px',
    },
    preLoad: 1.3,
    attempt: 1,
    adapter: {
        loaded ({el}) {
            const srcSet = el.attributes['data-srcset'];

            if (srcSet) {
                el.setAttribute('srcSet', srcSet.value);
            }
        },
    },
});
