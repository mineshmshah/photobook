const importRules = require('./rules/import');
// const jestRules = require('./rules/jest');

module.exports = ({  nodePaths = undefined } = {}) => ({
  extends: [
    'airbnb-base',
    // 'plugin:jest/recommended',
    // 'plugin:jest/style',
    'prettier',
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  env: {
    "browser": true
  },
  rules: {
    ...importRules,
    // ...jestRules,
  },
  settings: {
    parserOptions: {
      ecmaVersion: 2020,
    },
    'import/resolver': {
      node: {
        paths: nodePaths,
      },
    },
  },
});
