import Vue from 'vue'
import App from './App'
import router from './router'
import api from './apis/api'
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
