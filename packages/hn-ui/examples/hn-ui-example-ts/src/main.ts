import Vue from "vue";
import HnUi from '@hn-ui/hn-ui'
import '@hn-ui/theme/lib/index.css'
import '@hn-ui/icons/lib/index.css'
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(HnUi);

new Vue({
  render: h => h(App)
}).$mount("#app");
