module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": true,
  },
  "rules": {
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "react/display-name": "error",
    "react/jsx-boolean-value": [
      "error",
      "never"
    ],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js"
        ]
      }
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline"
    ],
    "react/jsx-handler-names": "error",
    "react/jsx-indent": [
      2,
      "tab"
    ],
    "react/jsx-indent-props": [
      2,
      "tab"
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 3
      }
    ],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-space-before-closing": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-comment-textnodes": "error",
    "react/no-danger": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-multi-comp": "off",
    "react/no-render-return-value": "error",
    "react/no-is-mounted": "error",
    "react/no-unknown-property": "error",
    "react/prefer-arrow-callback": "off",
    "react/prefer-es6-class": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-extension": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "react/sort-prop-types": "error",
    "react/wrap-multilines": "error",
    "react/no-string-refs": "warn",
    "react/jsx-key": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-sort-props": "off",
    "react/no-set-state": "off",
    "react/forbid-prop-types": "off",
    "react/prefer-stateless-function": "off",
    "react/require-optimization": "off",
  }
};
