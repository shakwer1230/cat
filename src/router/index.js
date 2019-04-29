import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/index'
/* Layout */
// import Layout from '../pages/layout/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      // children: [{
      //   path: '/index',
      //   component: () => import('@/pages/home/index')
      // }]
      component: Home
    }
  ]
})
