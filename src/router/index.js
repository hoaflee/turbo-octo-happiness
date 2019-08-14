import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index.vue'
import JobDetail from '@/components/Job/index.vue'

import About from '@/components/About/About.vue'
import Terms from '@/components/About/Terms.vue'
import Privacy from '@/components/About/Privacy.vue'
import Helps from '@/components/About/Helps.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/job/:id',
          name: 'jobDetail',
          component: JobDetail
        }
      ],
      meta: {
        title: "Premival - Discover and Connect with Companies that Share Your Mission and Values"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: null
      }
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms,
      meta: {
        title: null
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
      meta: {
        title: null
      }
    },
    {
      path: '/helps',
      name: 'helps',
      component: Helps,
      meta: {
        title: null
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
