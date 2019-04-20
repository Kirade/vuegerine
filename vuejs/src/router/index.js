import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layouts/Layout'
import Landing from '@/pages/Landing/Landing'
import About from '@/pages/About/About'
import Store from '@/pages/Store/Store'
import Contact from '@/pages/Contact/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: 'home',
      component: Layout,
      children: [
        {
          path: 'home',
          component: Landing
        },
        {
          path: 'about',
          component: About
        },
        {
          path: 'store',
          component: Store
        },
        {
          path: 'contact',
          component: Contact
        }
      ]
    }
  ]
})
