<template>
    <div>
        <div class="container">
            <h1 v-if="error.statusCode === 404">
                Page not found
            </h1>
            <h1 v-else>
                Error occured
            </h1>
            <p>Something wrong happend.</p>
            <nuxt-link to="/">Go to index page</nuxt-link>
        </div>
    </div>
</template>


<script>

    export default {
        props: ['error'],
    };

</script>
