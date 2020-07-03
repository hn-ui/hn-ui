import Vue from 'vue'
import HnUi from 'hn-ui'
import 'hn-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(HnUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
