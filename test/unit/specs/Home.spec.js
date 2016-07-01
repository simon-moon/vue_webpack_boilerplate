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
