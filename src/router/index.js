import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import Content from '../pages/content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    }
  ]
})
