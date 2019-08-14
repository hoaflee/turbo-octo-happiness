import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import job from './modules/job'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    common,
    job,
    user
  }
})
