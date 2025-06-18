import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {ignores: ['dist', 'node_modules']},
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react': react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
            'indent': ['warn', 4, {"SwitchCase": 1}],
            "quotes": ['warn', "single", {"avoidEscape": true}],
            "comma-dangle": ['warn', 'never'],
            'semi': ['warn', 'always'],
            'object-curly-spacing': ['warn', 'always'],
            'array-bracket-spacing': ['warn', 'always'],
            'react/jsx-curly-spacing': ['warn', 'always'],
            "@typescript-eslint/no-explicit-any": "off"
        },
    },
)
