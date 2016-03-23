<template>
  <div class="hello row">
    <div class="col-md-12">
    	<span>
    	  This is the <b>{{ msg }}</b> component located at src/components/Home.vue 
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>