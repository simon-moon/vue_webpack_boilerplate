export default {
  '/': {
    component: function (resolve) {
      require(['./layouts/Home'], resolve)
    }
  },
  '/home': {
    component: function (resolve) {
      require(['./layouts/Home'], resolve)
    }
  }
}
