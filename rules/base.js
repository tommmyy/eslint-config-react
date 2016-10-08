module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "plugins": [
    "babel",
  ],
  "ecmaFeatures": {
    "blockBindings": true,
    "forOf": true,
    "classes": true,
    "modules": true,
    "destructuring ": true
  },
  "rules": {
    "indent": [
      2,
      "tab"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "arrow-spacing": "error",
    "arrow-parens": "error",
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-this": [
      "error",
      "self"
    ],
    "consistent-return": "off",
    "dot-notation": "error",
    "dot-location": [
      "error",
      "property"
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "eol-last": "error",
    "id-blacklist": [
      "error"
    ],
    "keyword-spacing": "error",
    "key-spacing": "error",
    "max-len": [
      "error",
      120,
      4
    ],
    "new-cap": [
      "off",
      {
        "capIsNew": true,
        "newIsCap": true
      }
    ],
    "no-unused-expressions": "error",
    "no-unused-vars": "error",
    "no-shadow": "off",
    "no-spaced-func": "error",
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": "error",
    "no-undef": "error",
    "no-empty-pattern": "error",
    "no-dupe-keys": "error",
    "no-dupe-args": "error",
    "no-duplicate-case": "error",
    "no-cond-assign": "error",
    "no-extra-semi": "error",
    "no-extra-boolean-cast": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-var": "error",
    "one-var": [
      "error",
      "never"
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "prefer-arrow-callback": "off",
    "prefer-const": "error",
    "prefer-template": "error",
    "quotes": [
      "error",
      "single",
      "avoid-escape"
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "spaced-comment": "error",
    "yoda": "error",
    "strict": "off",
    "no-case-declarations": "off",
    "babel/generator-star-spacing": "error",
    "babel/array-bracket-spacing": "error",
    "babel/arrow-parens": "error",
    "babel/no-await-in-loop": "error",
    "babel/func-params-comma-dangle": "error",
    "babel/flow-object-type": "error",
    "babel/new-cap": "error",
    "babel/object-shorthand": "error"
  }
};
