module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:react-redux/recommended',
        'plugin:redux-saga/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true
        }
    },
    plugins: ['@typescript-eslint', 'react-redux', 'redux-saga'],
    rules: {
        'react-redux/connect-prefer-named-arguments': 2,
        '@typescript-eslint/no-use-before-define': 0,
        'no-console': 0
    }
};
