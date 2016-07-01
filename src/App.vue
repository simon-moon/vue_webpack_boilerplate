<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-12">
          <img class="logo img-responsive" src="/static/assets/images/vuejs.png">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>
            <a v-link="{ path: '/home' }" class="btn btn-primary">Home</a> 
            <a v-link="{ path: '/test' }" class="btn btn-success" >Test</a> 
          </p>
        </div>
      </div>
      <div clas="row">
        <div class="col-md-12">  
          <h3>
            Welcome to Vue 
          </h3>
        </div>
      </div>  
      <div class="row"> 
        <div class="col-md-12">  
          <p>  
            This is the <b>{{ msg }}</b> view Located in src/App.vue
          </p>
        </div>
      </div>    

        <!---Main View -->
      <div class="row">
        <div class="col-md-12"> 
          <router-view>
          </router-view>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang='scss'>
$icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/";
@import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';

.jumbotron {
  margin-top: 10%;
  text-align: center;
}

.img-responsive{
  margin: 0 auto 20px;
  height: auto;
  width: 500px;
}
</style>

<script>
  export default {
    data () {
      return {
        msg: 'Parent'
      }
    }
  }
</script>
