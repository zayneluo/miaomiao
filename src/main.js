import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.filter('replaceStr', function (value) {
  return value.replace('w.h', '170.230')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
