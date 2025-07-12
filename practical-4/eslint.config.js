// eslint.config.js (CommonJS version)
module.exports = [
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 2],
      },
    },
  ];  