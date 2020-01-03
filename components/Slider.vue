<template>
    <div class="slider row">
        <div class="slider__controls col-md-4">
            <div v-for="(slide, index) in slides"
                 class="slider__controls__item"
                 :class="{'__active': index === activeSlide, 'mt-1': index !== 0 }"
                 :key="index"
                 @click="activeSlide = index">
                <span v-html="slide.controls"></span>
            </div>
        </div>

        <div class="slider__container col-md-8 mt-1 mt-md-0">
            <div v-for="(slide, index) in slides"
                 class="slider__slide"
                 :class="{'__active': index === activeSlide}"
                 :key="index">
                <res-img :image="{ resImg: slide.img, colMd: 8}"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Slider',

        props: {
            slides: {
                type: Array,
                required: true,
            },
        },

        data() {
            return {
                activeSlide: 0,
            };
        },
    };
</script>

<style lang="stylus">

    .slider__slide:not(.__active)
        display: none

    .slider__controls__item
        position: relative;
        cursor: pointer;

        &::before
            display: none
            content: ""
            position: absolute
            top: 15px
            left: -20px
            width: 10px
            height: 10px
            border-top: 2px solid rgb(84,126,254)
            border-right: 2px solid rgb(84,126,254)
            transform: rotate(45deg)
            +media-up('md')
                left: -25px
                width: 15px
                height: 15px
            +media-up('lg')
                left: -54px
                top: 33px
                width: 30px
                height: 30px

    .slider__controls__item.__active
        b
            color: #3262F4
        &::before
            display: block

</style>
