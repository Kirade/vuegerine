import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layouts/Layout'
import Landing from '@/pages/Landing/Landing'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'landing',
          component: Landing
        },
        {
          path: 'hello',
          component: HelloWorld
        },
        {
          path: 'test',
          component: Test
        }
      ]
    }
  ]
})
