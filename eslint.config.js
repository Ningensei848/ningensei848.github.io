// eslint.config.js
const js = require('@eslint/js')
const tseslint = require('typescript-eslint')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const prettier = require('eslint-config-prettier')
const globals = require('globals')

module.exports = tseslint.config(
    // 1. 全体設定 (Ignores)
    {
        ignores: ['.docusaurus/*', 'build/*', 'src/**/*.js', '*.config.js'],
    },

    // 2. JavaScript 推奨設定 (eslint:recommended の代替)
    js.configs.recommended,

    // 3. TypeScript 推奨設定 (v8 の書き方)
    ...tseslint.configs.recommended,

    // 4. React 関連の設定
    {
        files: ['src/**/*.{ts,tsx}'],
        plugins: {
            react: react,
            'react-hooks': reactHooks,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: __dirname,
            },
        },
        settings: {
            react: {
                version: 'detect', // 自動検出推奨
            },
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off', // React 17+ (Docusaurus) では不要
            semi: ['error', 'never'], // セミコロンなし
        },
    },

    // 5. Prettier との競合回避 (必ず最後に配置)
    prettier,
)
