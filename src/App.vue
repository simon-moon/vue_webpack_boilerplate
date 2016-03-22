<template>
  <div id="wrapper">
    <img class="logo" src="./assets/K_logo.png">
    <p>
      <a v-link="{ path: '/home' }">Home</a> - <a v-link="{ path: '/test' }" >Test</a> 
    </p> 
    <p>
      Welcome to New Schweser - a Vue.js app. 
    </p>
    <p>  
      This is the Parent view Located in src/App.vue
    </p>
    <!---Main View -->
    <router-view>
    </router-view>
  </div>
</template>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #wrapper {
    margin-top: -100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
  }

  .logo {
    width: 100px;
    height: 100px;
  }
</style>
