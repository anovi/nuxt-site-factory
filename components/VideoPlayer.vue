<template>
    <figure class="video-player" :class="{ '__playing': playing }" :style="styles">
        <figcaption v-if="caption" >{{ caption }}</figcaption>

        <div class="video-player__wrapper">
            <video ref="video-player"
                   class="video-player__video screen"
                   :src="src"
                   :class="{ '__shadow': shadow }"
                   :loop="loop"
                   :controls="controls"
                   @click="onClick"
                   @play="onPlay"
                   @pause="onPause"
                   @ended="$emit('ended')"
                   @test="test">
            </video>
            <slot v-if="!playing" name="play-button">
                <button class="video-player__play-button">
                    <svg width="48" height="56" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 14V0L12 6.84444L0 14Z" fill="black"/>
                    </svg>
                </button>
            </slot>
        </div>
        <div class="video-player__warn">
            Ваш браузер не поддерживает встроенные видео.<br>
            Если хотите, <a :href="src">скачайте видео</a>
            и посмотрите видеплеером на ваш выбор.
        </div>
    </figure>
</template>


<script>

    export default {
        props: {
            src: {
                type: String,
                default: '',
            },
            caption: {
                type: String,
                default: '',
            },
            width: {
                type: String,
                default: '',
            },
            loop: {
                type: Boolean,
                default: false,
            },
            controls: {
                type: Boolean,
                default: false,
            },
            shadow: {
                type: Boolean,
                default: false,
            },
            controlsPlaying: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                styles: this.width ? `max-width: none; width: ${this.width};` : '',
                playing: false,
            };
        },

        watch: {
            controlsPlaying() {
                this.onClick();
            },
        },

        methods: {
            test(event) {
                console.log(event);
            },

            onClick() {
                if (this.$refs['video-player'].paused) {
                    this.play();
                } else {
                    this.pause();
                }
            },

            play() {
                this.$refs['video-player'].play();
            },

            pause() {
                this.$refs['video-player'].pause();
                this.$emit('pause');
            },

            onPlay() {
                this.$emit('started');
                this.playing = true;
            },

            onPause() {
                this.playing = false;
            },
        },


    };
</script>


<style lang="stylus">

    .video-player
        margin 0
        figcaption
            margin-top 0
        &__wrapper
            position relative
            display inline-block
            height 100%
            width 100%
            font 0/0 a
            &:before
                position absolute
                z-index 0
                content ""
                display block
                top 0
                left 0
                bottom 0
                right 0
                pointer-events none
                transition all 0.2s ease
                background-color rgba(0,0,0,0.2)
                opacity 1
            & .video-player__play-button
                position: absolute
                left 50%
                top 50%
                z-index: 1
                width 160px
                height 160px
                margin -80px 0 0 -80px
                padding-left 20px
                border none
                border-radius: 50%
                pointer-events none
                transition all 0.2s ease
                background #557FFF center center no-repeat
                opacity 0.7
                background-size 100%
            &:hover .video-player__play-button
                opacity 0.8
        &__video
            display block
            cursor pointer
            max-width 100%
            max-height 100%
            width 100%
            height 100%
            object-fit cover

            &.__shadow
                box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.1)

        &__warn
            display none

        &.-wide
            .video-player__wrapper
                margin-left auto
                margin-right auto

        &.__playing
            & .video-player__wrapper
                &:before
                    opacity 0
                & .video-player__play-button
                    opacity 0
                    margin-top 0

        .no-h264 &
            &.-wide
                margin-left 0
                margin-right 0
            .video-player__wrapper
                display none
            .video-player__warn
                display block
                color gray
                padding-left 1em
                border-left 1px solid #FFBABA
                margin 0 auto
                max-width textWidth

</style>
