import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// Bind App (src/App.vue) to <app> element on index.html to create base view
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

Vue.use(VueRouter)

var router = new VueRouter({
  hashbang: false,
  history: true,
  mode: 'html5',
  linkActiveClass: 'active',
  saveScrollPosition: true,
  transitionOnLoad: true
})

router.map({
  '/': {
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  },
  '/home': {
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  },
  '/test': {
    component: function (resolve) {
      require(['./components/Test'], resolve)
    }
  }
})

router.start(App, '#app')
