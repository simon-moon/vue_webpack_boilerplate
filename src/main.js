import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import RouterMap from './routemap'
import RouterConfig from './routecfg'

Vue.use(VueRouter)

var Router = new VueRouter(RouterConfig)

Router.map(RouterMap)

Router.start(App, 'app')
