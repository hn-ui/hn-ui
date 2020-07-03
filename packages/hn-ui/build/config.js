const path = require('path')
const fs = require('fs')
const nodeExternals = require('webpack-node-externals')
const Components = require('../components.json')

const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'))
let externals = {}

Object.keys(Components).forEach(function(key) {
  externals[`hn-ui/components/${key}`] = `hn-ui/lib/${key}`
})

utilsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`hn-ui/src/utils/${file}`] = `hn-ui/lib/utils/${file}`
})

externals = [
  Object.assign(
    {
      vue: 'vue',
    },
    externals,
  ),
  nodeExternals(),
]

exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  components: path.resolve(__dirname, '../components'),
  examples: path.resolve(__dirname, '../examples'),
  'hn-ui': path.resolve(__dirname, '../'),
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue',
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/
