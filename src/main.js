import Vue from 'vue'
import App from './AppX.vue'
import store from './store/index'
import vuetify from './plugins/vuetify'
import VModal from 'vue-js-modal'

// Vue.use(VModal)
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
