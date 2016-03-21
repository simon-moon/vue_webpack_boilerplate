import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

Vue.use(VueRouter)

var router = new VueRouter({
  hashbang: false,
  history: true
})

router.map({
  '/': {
    component: function (resolve) {
      require(['./components/Home.vue'], resolve)
    }
  },
  '/home': {
    component: function (resolve) {
      require(['./components/Home.vue'], resolve)
    }
  },
  '/test': {
    component: function (resolve) {
      require(['./components/Test.vue'], resolve)
    }
  }
})

router.start(App, '#app')
