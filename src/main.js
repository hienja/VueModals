import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VModal from 'vue-js-modal'

Vue.use(VModal, {
  dialog: true
})
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
