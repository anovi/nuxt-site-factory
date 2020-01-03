<template>
    <div class="slider row">
        <div class="col-12">
            <div class="slider__gallery">
                <div class="slider__gallery-wrapper">
                    <picture v-for="(slide, index) in slides"
                             ref="slides"
                             class="slider__slide"
                             :key="index"
                             :class="{'__active-slide': index === activeSlide, '__second-slide': index === nextSlide, '__third-slide': index === nextSlide + 1 || index === nextSlide + 1 - slides.length}"
                             @click="activeSlide = nextSlide"
                    >
                        <img :src="slide">
                    </picture>
                </div>
            </div>
            <div class="slider__controls d-flex justify-content-center mt-2">
                <button v-for="(slide, index) in slides" class="slider__control" :class="{'__active-control': index === activeSlide}" :key="index" @click="changeSlide(index)">{{ index }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            slides: {
                type: Array,
                default: () => [],
                required: true,
            },
        },

        data() {
            return {
                activeSlide: 0,
            };
        },

        computed: {
            nextSlide() {
                return this.activeSlide <= this.slides.length - 2 ? this.activeSlide + 1 : 0;
            },
        },

        methods: {
            changeSlide(index = 0) {
                this.activeSlide = index;
            },
        },
    };
</script>

<style lang="stylus">

    .slider
        .slider__gallery
            display flex
            justify-content center

        .slider__gallery-wrapper
            position relative

        .slider__slide
            position absolute
            left 0
            top 0
            display block
            opacity 0
            transition transform 0.3s, -webkit-transform 0.3s
            cursor pointer
            box-shadow 0 2px 10px 0 rgba(0, 0, 0, 0.2)
            user-select none
            &::before
                content ''
                position absolute
                left 0
                top 0
                right 0
                bottom 0
                transition background-color 0.3s, opacity 0.3s
            & img
                display block

        .__active-slide
            position relative
            z-index 3
            opacity 1
            &::before
                display none
        .__second-slide
            z-index 2
            transform translate(12px, 13px)
            opacity 1
            &::before
                background-color #BBCEFF
        .__third-slide
            z-index 1
            transform translate(22px, 25px)
            opacity 1
            &::before
                background-color #88A5FF


        .slider__controls
            position relative
            left 12px

        .slider__control
            height 14px
            width 14px
            padding 0
            margin 0 10px
            border-radius 50%
            border none
            opacity 0.3
            background-color white
            transition opacity 0.3s
            font-size 0
            cursor pointer

        .slider__control.__active-control
            opacity 1

</style>
