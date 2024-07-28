module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "eslint-config-airbnb/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js", ".eslintrc.mjs"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",

    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-cycle": "off",
    "import/extensions": "off",

    "no-empty-function": "off",
    "no-useless-constructor": "off",
    "class-methods-use-this": "off",

    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: false,
        printWidth: 80,
      },
    ],
  },
}
