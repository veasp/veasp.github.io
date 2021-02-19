module.exports = {
  parser: `@typescript-eslint/parser`, // Specifies the ESLint parser
  extends: [
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:@typescript-eslint/recommended`,
    `prettier/@typescript-eslint`,
    `plugin:prettier/recommended`,
  ],
  settings: {
    react: {
      version: `detect`,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [`@typescript-eslint`, `react`],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: `module`, // Allows for the use of imports
  },
  rules: {
    "react/prop-types": `off`, // Disable prop-types as we use TypeScript for type checking
    "@typescript-eslint/explicit-function-return-type": [
      `error`,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      `error`,
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    "react/require-default-props": [0],
    "import/prefer-default-export": `off`,
    "import/no-default-export": `error`,
    "no-prototype-builtins": `off`,
    "react/jsx-one-expression-per-line": `off`,
    "jsx-a11y/click-events-have-key-events": `off`,
    "react/destructuring-assignment": `off`,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [`.js`, `.jsx`, `.tsx`, `.ts`],
      },
    ],
    "no-void": [`off`],
    quotes: [2, `backtick`, { avoidEscape: true }],
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: [`*.js`],
      rules: {
        "@typescript-eslint/no-var-requires": `off`, //
      },
    },
  ],
}
