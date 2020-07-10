'use strict'

const postcss = require('postcss')
const fs = require('fs')
const path = require('path')
const fontFile = fs.readFileSync(path.resolve(__dirname, '../../src/index.scss'), 'utf8')
const nodes = postcss.parse(fontFile).nodes
const classList = []

nodes.forEach(node => {
  const selector = node.selector || ''
  const reg = new RegExp(/\.hn-ui-icon-([^:]+):before/)
  const arr = selector.match(reg)

  if (arr && arr[1]) {
    classList.push(arr[1])
  }
})

classList.reverse() // 希望按 css 文件顺序倒序排列

fs.writeFile(path.resolve(__dirname, '../../icon.json'), JSON.stringify(classList), () => {})
