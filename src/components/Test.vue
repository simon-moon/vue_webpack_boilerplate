<template>
  <div class="hello">
    <span>
      This is the <b>{{ msg }}</b> component located at src/components/Test.vue 
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Test'
    }
  }
}
</script>