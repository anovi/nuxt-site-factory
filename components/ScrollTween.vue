<template>
<div ref="roadmapWrapper" :style="{ height: height }">
    <slot></slot>
</div>
</template>


<script>
export default {

    data() {
      return {
        windowHeight: null
      }
    },

    props: {
        height: {
            type: String,
            default: 'auto'
        },
        start: {
            type: Number,
            default: 0,
            validator: function (value) {
                return value >= 0 && value <= 1;
            }
        },
        end: {
            type: Number,
            default: 1,
            validator: function (value) {
                return value >= 0 && value <= 1;
            }
        },
        onScroll: {
            type: Function,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },


    mounted() {
        window.addEventListener('scroll', this.onScrollRequestFrame);
        window.addEventListener('resize', this.onResize);
        this.setWindowParams();
    },


    beforeDestroy() {
        window.removeEventListener('scroll', this.onScrollRequestFrame);
        window.removeEventListener('resize', this.onResize);
    },


    methods: {

        setWindowParams() {
            this.windowHeight = window.innerHeight;
        },


        onResize() {
            this.setWindowParams();
        },


        onScrollRequestFrame() {
            if (this.disabled) return;
            window.requestAnimationFrame(this.onScrollHandler);
        },


        onScrollHandler() {
            var rect = this.$refs.roadmapWrapper.getBoundingClientRect();
            let progress;
            let start = 0 + this.windowHeight * this.start;
            let end = -1 * (rect.height - this.windowHeight * this.end);

            if (rect.y > start && rect.y < (end - this.windowHeight)) {
                progress = 1
            } else if (rect.y > start) {
                progress = 0;
            } else if (rect.y < end) {
                progress = 1;
            } else {
                progress = (rect.y - start) / (end - start);
            }

            this.onScroll(progress, rect);
        }
    }

}
</script>
