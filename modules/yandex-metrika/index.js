const path = require('path');

module.exports = function yandexMetrika (options) {
    if (this.options.dev && process.env.NODE_ENV !== 'production') {
        return
    }

    this.options.head.script.push({
        src: (options.useCDN ? 'https://cdn.jsdelivr.net/npm/yandex-metrica-watch' : 'https://mc.yandex.ru/metrika') + '/watch.js', // add https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js
        async: true
    });

    this.addPlugin({
        src: path.resolve(__dirname, './plugin.js'),
        ssr: false,
        options,
    })
};
