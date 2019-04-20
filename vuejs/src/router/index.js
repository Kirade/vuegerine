import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/Base'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Landing from '@/pages/Landing/Landing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base,
      children: [
        {
          path: 'landing',
          name: 'Landing',
          component: Landing
        },
        {
          path: 'hello',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: 'test',
          name: 'Test',
          component: Test
        }
      ]
    }
  ]
})
