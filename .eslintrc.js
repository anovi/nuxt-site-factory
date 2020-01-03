module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        'airbnb-base',
        'airbnb-base/legacy',
        'airbnb-base/whitespace',
        'plugin:vue/recommended',
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'indent': 'off',
        'max-len': 'off',
        'sort-keys': 'off',
        'sort-imports': 'off',
        'no-ternary': 'off',
        'no-magic-numbers': ["error", {
            "ignore": [-1, 0, 1, 100]
        }],
        'prefer-object-spread': 0,
        'multiline-comment-style': 0,
        'import/no-default-export': 'off',
        'import/no-internal-modules': 'off',
        'import/no-unresolved': 'off',
        'import/no-nodejs-modules': 0,
        'import/no-anonymous-default-export': ['error', {
            'allowObject': true,
        }],
        'import/order': 'off',
        'import/max-dependencies': 'off',
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1,
        }],
        'vue/max-attributes-per-line': [2, {
            'singleline': 5,
            'multiline': {
                'max': 1,
                'allowFirstLine': true
            }
        }],
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'never',
                'normal': 'never',
                'component': 'always'
            },
        }],
        'vue/attributes-order': [2, {
            order: [
                'DEFINITION',
                'CONDITIONALS',
                'LIST_RENDERING',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'OTHER_ATTR',
                'BINDING',
                'EVENTS',
                'CONTENT',
            ]
        }],
    }
};
