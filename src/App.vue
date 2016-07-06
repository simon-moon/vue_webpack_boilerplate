<template>
  <!---Main View -->
  <router-view>
  </router-view>
</template>

<style lang='scss'>
  $icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/";
  @import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';

  $blue: #29B6F6;
  $black: #717171;

  $body-font-family: "Lato";

  *,*:after,*:before {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
  }

  body {
    font-size: 1em;
    font-family: $body-font-family;
    font-weight: 400;
    line-height: 1.5;

    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;  
  }

  img {
    height: auto;
    max-width: 100%;
  }

  a {
    color: $blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

</style>

<script>
  export default {
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
