import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import RouterMap from './routemap'
import RouterConfig from './routecfg'

Vue.use(VueRouter)

var router = new VueRouter(RouterConfig)

router.map(RouterMap)

router.start(App, '#app')
