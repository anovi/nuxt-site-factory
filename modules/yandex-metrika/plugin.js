export default ({ app: { router } }) => {
    let ready = false;

    router.onReady(() => {
        ready = true
    });

    function create() {
        window['yaCounter<%= options.id %>'] = new Ya.Metrika(<%= JSON.stringify(options) %>);
        router.afterEach((to, from) => {
            if (!ready) {
                return
            }
            window['yaCounter<%= options.id %>'].hit(to.fullPath, {
                referer: from.fullPath
            })
        })
    }

    if (window.Ya && window.Ya.Metrika) {
        create()
    } else {
        (function (w, c) {
            (w[c] = w[c] || []).push(create)
        })(window, 'yandex_metrika_callbacks')
    }
}
