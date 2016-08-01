<template>

  <section class="title">
    <div class="container">
      <div class="row">
        <div class="info col-md-12">
          <p>A Vue Demo</p>
          <p>Lovingly Made by <a target="_blank" href="https://codepen.io/simonmoon/">Simon Moon</a>.</p>
            <div class="col-md-12 text-center">
              <p>Search Entries By Author, Title or Date!</p>
              <input v-model="search" class="form-control" placeholder="Start Typing">
            </div>  
        </div>
      </div>
    </div>
  </section>

  <section class="entries ">
    <div class="container">

      <template v-for="entry in entries | filterBy search">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 moving-item">
          <div class="card" data-id="{{ entry.fields.data.id }}">
            <div class="image">
              <img v-bind:src="entry.fields.data.thumbnail + '?image=' + randomIndex()" alt="" onerror="if (this.src != './static/assets/images/moon.jpg') this.src = './static/assets/images/moon.jpg';">

              <div v-bind:class="[overlay, isEven($index) ? overlayBlue : overlayIndigo ]">
                <div class="overlay-content">
                  <ul class="meta">
                    <li><i class="fa fa-tag"></i> {{buzzWord()}}</li>
                    <li><i class="fa fa-clock-o"></i> {{ entry.fields.data.createdAt }} </li>
                  </ul>

                  <a href="http://en.wikipedia.org/wiki/Special:Randompage" class="title" target="_blank">{{ entry.fields.data.title }}</a>

                  <ul class="meta meta-last">
                    <li><a v-bind:href="entry.fields.data.creator['profileUrl']" target="_blank"><i class="fa fa-user"></i> {{ entry.fields.data.creator['name'] }}</a></li>
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

  section.title .info {
    clear: both;
    display: block;
    font-variant: small-caps;
    letter-spacing: 2px;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    text-align: center;
  }

  section.title .form-control {
    width:250px;
    margin: 0 auto 0 auto;
  }

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
import BuzzWords from 'buzzwords'
export default {
  data () {
    return {
      search: '',
      overlay: 'overlay',
      overlayBlue: 'overlay-blue',
      overlayIndigo: 'overlay-indigo'
    }
  },
  props: ['entries'],
  methods: {
    isEven: function (entryIndex) {
      if (entryIndex % 2 === 0) {
        return true
      } else {
        return false
      }
    },
    randomIndex: function () {
      var randomIndex = Math.floor((Math.random() * 1000) + 1)
      return randomIndex.toString()
    },
    buzzWord: function () {
      var buzzWord = BuzzWords[Math.floor(Math.random() * BuzzWords.length)]
      return buzzWord
    }
  }
}
</script>
