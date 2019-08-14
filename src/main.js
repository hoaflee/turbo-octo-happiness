import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// const DEFAULT_TITLE = "Premival - Discover and Connect with Companies that Share Your Mission and Values"

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
