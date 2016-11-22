module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'standard',
    plugins: [
        'html'
    ],
    'rules': {
        'indent': [2, 4],
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'padded-blocks': [0, 'never'],
        'space-before-function-paren': [2, 'never'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
