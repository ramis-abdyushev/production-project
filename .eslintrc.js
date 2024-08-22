module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/react',
    'plugin:jsx-a11y/recommended',
    'plugin:i18next/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
    },
  },
  rules: {
    'no-debugger': 1,
    'import/no-named-as-default-member': 0,
    'i18next/no-literal-string': 1,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-autofocus': 0,
    'react-hooks/exhaustive-deps': 2,
  },
  env: {
    node: true,
    browser: true,
    es2022: true,
    jest: true,
  },
  globals: {
    __IS_DEV__: 'readonly',
    __API__: 'readonly',
  },
  ignorePatterns: ['!.stylelintrc.json'],
};
