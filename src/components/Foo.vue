<template>
  <div class="row">
    <div class="col-md-12">
    	<span>
    	  This is the nested <b>{{ msg }}</b> component located at src/components/Foo.vue 
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>