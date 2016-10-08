# eslint-config-react

This package provides GEF's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-react

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `babel-eslint`, `eslint-plugin-babel`, and `eslint-plugin-react`.

1. Ensure packages are installed with correct version numbers by running:

  ```sh
  npm install --save-dev eslint-config-react eslint@3.3.1 babel-eslint@6.1.2 eslint-plugin-babel@3.3.0 eslint-plugin-react@6.1.1
  ```

2. Add `"extends": "react"` to your .eslintrc

### eslint-config-react/base
The eslint-config-react without excluding rules for React.

1. See eslint-config-react

2. Add `"extends": "react/base"` to your .eslintrc
