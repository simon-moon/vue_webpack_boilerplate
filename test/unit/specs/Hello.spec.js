import Vue from 'vue'
import Home from 'src/components/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><home></home></div>',
      components: { Home }
    }).$mount()
    expect(vm.$el.querySelector('.hello span b').textContent).toBe('Home')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vue-loader-example/blob/master/test/unit/a.spec.js#L24-L49
