import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { currency } from './utils/currency'

import './components/base/index'
import './plugins/element'

Vue.config.productionTip = false
Vue.filter('currency', currency)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
