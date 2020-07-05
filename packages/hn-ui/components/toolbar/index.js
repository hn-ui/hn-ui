import Toolbar from './src/toolbar'

/* istanbul ignore next */
Toolbar.install = function(Vue) {
  Vue.component(Toolbar.name, Toolbar)
}

export default Toolbar
