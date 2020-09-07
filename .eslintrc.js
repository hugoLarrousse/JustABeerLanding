module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'linebreak-style': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'max-len': [2, 150, 2],
    'guard-for-in': 'off',
    'no-continue': 'off',
  },
};
