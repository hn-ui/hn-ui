import Vue from 'vue'
import HdUi from 'hn-ui'
import 'hn-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(HdUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
