import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import Content from '../pages/content.vue'
import Login from '../pages/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    }
  ]
})
