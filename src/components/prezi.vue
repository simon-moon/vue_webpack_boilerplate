<template>
  <section class="prezis">
    <div class="container">
      <template v-for="prezi in prezis">
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="card" data-id="{{ prezi.id }}">
            <div class="image">
              <img v-bind:src="prezi.thumbnail + '?image=' + randomImage()" alt="">

              <div v-bind:class="[overlay, isEven($index) ? overlayBlue : overlayIndigo ]">
                <div class="overlay-content">
                  <ul class="meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> Html5/Css3</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> {{ prezi.createdAt }} </a></li>
                  </ul>

                  <a href="#0" class="title">{{ prezi.title }}</a>

                  <ul class="meta meta-last">
                    <li><a v-bind:href="prezi.creator['profileUrl']" target="_blank"><i class="fa fa-user"></i> {{ prezi.creator['name'] }}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

    </div>
  </section> 
</template>

<style lang='scss'>
  $header-font-family: "Montserrat";
  $indigo: #5C6BC0;
  $blue: #29B6F6;
  $black: #717171;

  .card {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height:auto;
    padding: 15px 0 15px 0;
  } 

  .card .image {
    -webkit-border-radius: 3px;
       -moz-border-radius: 3px;
        border-radius: 3px;
    display: block;
    min-height: 240px; 
    overflow: hidden;
    position: relative;

    > img {
      display: block;
      margin-bottom: 0;

      -webkit-transition: all .25s ease-in-out;
         -moz-transition: all .25s ease-in-out;
          -ms-transition: all .25s ease-in-out;
           -o-transition: all .25s ease-in-out;
              transition: all .25s ease-in-out;
    }

    &:hover > img {
      -webkit-transform: scale(1.2);
         -moz-transform: scale(1.2);
          -ms-transform: scale(1.2);
           -o-transform: scale(1.2);
              transform: scale(1.2);
    }
  }

  .card .title {
    color: white;
    display: inline-block;
    font-family: $header-font-family;
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.75em;
    text-decoration: none;

    -webkit-transition: all 0.3s ease-out;
       -moz-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;

    &:hover {
      color: rgba(white, 0.7);
      text-decoration: none;
    }
  }

  .card .overlay {
    content: "";
    bottom: 0;
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .card .overlay-indigo {
    background-image: linear-gradient(to bottom, rgba($indigo, 0.1), rgba($indigo, 0.8));
    z-index: 2;
  }

  .card .overlay-blue {
    background-image: linear-gradient(to bottom, rgba($blue, 0.1), rgba($blue, 0.8));
    z-index: 2;
  }

  .card .overlay-content {
    position: absolute;
    bottom: 0;
    padding: 1.5em;
    z-index: 3;
  }

  .card .meta {
    margin: 0;
    margin-right: -1em;
    margin-bottom: 0.75em;

    &.meta-last {
      margin-bottom: 0;
    }
     
    li {
      color: #f8f8f8;
      display: inline;
      list-style-type: none;
      margin-bottom: 0;
      padding-right: 1em;

      font-size: 0.85em;
      font-variant: small-caps;
      letter-spacing: 1px;

      &:not(:last-child):after {
        content: "\25cf";
        font-style: normal;
        position: relative;
        color: rgba(white, 0.25);
        right: -0.6em;
      }

      > a {
        color: #f8f8f8;
      }
    }
  }
</style>

<script>
export default {
  data () {
    return {
      overlay: 'overlay',
      overlayBlue: 'overlay-blue',
      overlayIndigo: 'overlay-indigo'
    }
  },
  props: ['prezis'],
  methods: {
    isEven: function (entryIndex) {
      if (entryIndex % 2 === 0) {
        return true
      } else {
        return false
      }
    },
    randomImage: function () {
      var randomIndex = Math.floor((Math.random() * 100) + 50)
      return randomIndex.toString()
    }
  }
}
</script>
