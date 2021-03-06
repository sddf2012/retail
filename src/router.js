import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('./views/goods/Goods.vue')
        },
        {
          path: 'index',
          component: () => import('./views/goods/Goods.vue')
        }
      ]
    }
  ]
})
