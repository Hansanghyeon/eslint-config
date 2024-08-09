import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      '@stylistic/jsx': stylisticJsx,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent':                 ['error', 2],
      '@stylistic/js/semi':                   ['error', 'never'],
      '@stylistic/js/key-spacing':            ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      '@stylistic/js/quote-props':            ['error', 'as-needed'],
      '@stylistic/js/no-multi-spaces':        ['error', {
        exceptions: {
          // https://github.com/eslint-stylistic/eslint-stylistic/issues/245
          TSTypeAnnotation:  true,
          ImportDeclaration: true,
        },
      }],
      '@stylistic/js/jsx-quotes': ['error', "prefer-double"],
     },
  },
]
