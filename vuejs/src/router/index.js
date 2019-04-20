import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
