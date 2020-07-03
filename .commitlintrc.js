const fs = require('fs')
const path = require('path')

const HdUiPackages = fs.readdirSync(path.resolve(__dirname, 'packages/@hn-ui'))

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'docs',
        'hn-ui',
        'examples',
        ...HdUiPackages
      ].map(name => `$${name}`).concat('release')
    ],
    'subject-case': [0, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  }
}
