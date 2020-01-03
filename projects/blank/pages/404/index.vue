<template>
    <div>
        <div class="container">
            <h1 v-if="error.statusCode === 404">
                Страница не найдена
            </h1>
            <h1 v-else>
                Произошла ошибка
            </h1>
            <p>Вы либо ошиблись адресом страницы, либо на сайте что-то поменялось.</p>
            <nuxt-link to="/">
                <button class="promo__button mt-2">
                    На главную страницу
                </button>
            </nuxt-link>
        </div>
    </div>
</template>


<script>

    export default {
        props: {
            error: {
                type: Object,
                default: () => ({ statusCode: 404 }),
            },
        },
    };

</script>
