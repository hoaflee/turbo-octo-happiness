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
  beforeCreate () {
    // this.$router.beforeEach((to, from, next) => {
    //   document.title = to.meta.title || "Premival - Discover and Connect with Companies that Share Your Mission and Values";
    // });
    this.$router.beforeEach((to, from) => {
      Vue.nextTick( () => {
        document.title = "Premival - Discover and Connect with Companies that Share Your Mission and Values";
      });
    })
  },
  render: h => h(App)
}).$mount('#app')
