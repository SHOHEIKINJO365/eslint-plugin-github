module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['github', 'jsx-a11y'],
  extends: ['plugin:jsx-a11y/recommended'],
  rules: {
    'jsx-a11y/role-supports-aria-props': 'off', // Override with github/a11y-role-supports-aria-props until https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/910 is resolved
    'github/a11y-aria-label-is-well-formatted': 'error',
    'github/a11y-no-visually-hidden-interactive-element': 'error',
    'github/a11y-no-title-attribute': 'error',
    'github/a11y-svg-has-accessible-name': 'error',
    'github/a11y-role-supports-aria-props': 'error',
    'jsx-a11y/no-aria-hidden-on-focusable': 'error',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/anchor-ambiguous-text': [
      'error',
      {
        words: ['this', 'more', 'read here', 'read more'],
      },
    ],
  },
}
