import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

import mixin from './mixin/'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false
Vue.mixin(mixin);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBWhM-34x_4xdiNUM5MgnYZNe53LocjnP0",
    libraries: "places" // necessary for places input
  }
});

// const DEFAULT_TITLE = "Premival - Discover and Connect with Companies that Share Your Mission and Values"

new Vue({
  // mixins: [mixin],
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
