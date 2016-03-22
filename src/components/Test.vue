<template>
  <div class="hello">
    <span>
      This is the <b>{{ msg }}</b> component located at src/components/Test.vue 
    </span>
    <div>
      <p>
        Click Here for nested route: <a v-link="{ path: '/test/foo' }">Foo</a> -or - <a v-link="{ path: '/test/bar' }">Bar</a>
      </p>
      <!--This is the subRoute view-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Test'
    }
  }
}
</script>