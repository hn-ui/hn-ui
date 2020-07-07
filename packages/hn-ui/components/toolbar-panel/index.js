import ToolbarPanel from '../toolbar/src/panel'

/* istanbul ignore next */
ToolbarPanel.install = function(Vue) {
  Vue.component(ToolbarPanel.name, ToolbarPanel)
}

export default ToolbarPanel
