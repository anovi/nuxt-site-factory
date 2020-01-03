<script>

    export default {
        name: 'ResImg',
        functional: true,

        render: function(createElement, context) {
            const customSizes = `(max-width: 575px)  calc((100vw - 20px) / 12 * ${context.props.image.colXs || context.props.image.col || 12}),(max-width: 767px)  calc((100vw - 20px) / 12 * ${context.props.image.colSm || context.props.image.colXs || context.props.image.col || 12}),(max-width: 991px)  calc((100vw - 20px) / 12 * ${context.props.image.colMd || context.props.image.colSm || context.props.image.colXs || context.props.image.col || 12}),(min-width: 992px) ${960 / 12 * (context.props.image.colLg || context.props.image.colMd || context.props.image.colSm || context.props.image.colXs || context.props.image.col || 12) - 20}px, ${(context.props.image.col || 12) / 0.12}vw`;

            return createElement(
                'img', context.props.noLazy ? {
                    class: context.data.staticClass,
                    attrs: {
                        src: context.props.image.resImg.src,
                        srcset: context.props.noRes ? '' : context.props.image.resImg.srcSet,
                        sizes: context.props.noRes ? '' : customSizes,
                    },
                } : {
                    class: context.data.staticClass,
                    directives: [
                        {
                            name: 'lazy',
                            value: context.props.image.resImg.src,
                        }
                    ],
                    attrs: {
                        'data-srcset': context.props.noRes ? '' : context.props.image.resImg.srcSet,
                        sizes: context.props.noRes ? '' : customSizes,
                    },
                },
            );
        },

        props: {
            image: {
                type: Object,
                default: null,
            },

            noRes: {
                type: Boolean,
                default: false,
            },

            noLazy: {
                type: Boolean,
                default: false,
            },
        },

    };

</script>
