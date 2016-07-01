import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import RouterMap from './routemap'
import RouterConfig from './routecfg'

// extend Vue with VueRouter
Vue.use(VueRouter)

// initialize Router passing a Config
var Router = new VueRouter(RouterConfig)

// pass a routemap to the router
Router.map(RouterMap)

// Start the router on the application container
Router.start(App, 'app')
