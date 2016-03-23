<template>
  <div class="row">
    <div class="col-md-12">
    	<span>
    	  This is the nested <b>{{ msg }}</b> component located at src/components/Bar.vue 
      </span>
    </div>
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