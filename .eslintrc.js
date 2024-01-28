module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    `next`,
    `prettier`
  ],
  "overrides": [
    {
      "env": {
        "node": false
      },
      "files": [
        `.eslintrc.{js,cjs}`
      ],
      "parserOptions": {
        "sourceType": `script`
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": `latest`,
    "sourceType": `module`
  },
  "plugins": [],
  "rules": {
    indent: [2, 2, { SwitchCase: 1 }],
    strict: 2,
    quotes: [`error`, `backtick`, { "allowTemplateLiterals": true }],
    "react/react-in-jsx-scope": `off`,
    "react/jsx-filename-extension": [1, { "extensions": [`.js`, `.jsx`] }],
    "react/prop-types": `off`
  }
};
