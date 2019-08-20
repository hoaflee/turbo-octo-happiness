import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import Axios from 'axios'

import mixin from './mixin/'

Vue.config.productionTip = false
Vue.mixin(mixin);
Vue.prototype.$http = Axios;

// const DEFAULT_TITLE = "Premival - Discover and Connect with Companies that Share Your Mission and Values"

new Vue({
  // mixins: [mixin],
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
