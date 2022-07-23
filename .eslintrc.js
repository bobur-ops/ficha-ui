module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/require-valid-default-prop': 0,
    'vue/attribute-hyphenation': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    'no-console': 0,
  },
}
