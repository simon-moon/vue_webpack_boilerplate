export default {
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
    },
    subRoutes: {
      '/foo': {
        component: function (resolve) {
          require(['./components/Foo'], resolve)
        }
      },
      '/bar': {
        component: function (resolve) {
          require(['./components/Bar'], resolve)
        }
      }
    }
  }
}
