export default {
  '/': {
    component: function (resolve) {
      require(['./layouts/Home'], resolve)
    },
    props: {
      preziCollectionID: '34mEcsdMoUUEeOMW8Q6aCs'
    }
  },
  '/home': {
    component: function (resolve) {
      require(['./layouts/Home'], resolve)
    },
    props: {
      preziCollectionID: '34mEcsdMoUUEeOMW8Q6aCs'
    }
  }
}
