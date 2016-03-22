<template>
  <div class="hello">
  	<span>
  	  This is the nested <b>{{ msg }}</b> component located at src/components/Bar.vue 
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Bar'
    }
  }
}
</script>