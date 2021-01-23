module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base","plugin:jest/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // quotes - just use doubles
    quotes: [2, "double"],

    // sometimes tests are passed because they are still running. Jest has no
    // `pass()` method and writing expect(true).toBeDefined() or similar is
    // just stupid
    "jest/expect-expect": [0],

    // makes no difference to JS engine and some of the libraries we use export
    // variables with underscores
    "no-underscore-dangle": [0],
  },
};
