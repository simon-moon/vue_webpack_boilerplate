<template>

  <section class="title">
    <div class="container">
      <div class="row">
        <div class="info col-md-12">
          <p>A Prezi Demo</p>
          <p>Lovingly Made by <a target="_blank" href="#">Simon Moon</a>.</p>
          <a href="#" class="btn btn-small btn-primary">New Prezi</a>
        </div>
      </div>
    </div>
  </section>

  <prezis v-bind:prezis="layoutData.prezis">

</template>
<style lang='scss'>
  section.title .info {
    clear: both;
    display: block;
    font-variant: small-caps;
    letter-spacing: 2px;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    text-align: center;
  }
</style>

<script>
  import Prezis from '../components/prezi'
  export default {
    components: {
      Prezis
    },
    data () {
      return {
        layoutData: {
          'prezis': [
            {
              'id': '56f137f432fbb67217182785',
              'title': 'incididunt amet ad nostrud',
              'thumbnail': 'https://unsplash.it/400/400',
              'creator': {
                'name': 'consectetur laborum',
                'profileUrl': 'https://randomuser.me/'
              },
              'createdAt': 'March 6, 2014'
            },
            {
              'id': '56f137f4d62116d1231786ca',
              'title': 'Lorem commodo excepteur minim',
              'thumbnail': 'https://unsplash.it/400/400',
              'creator': {
                'name': 'cupidatat excepteur',
                'profileUrl': 'https://randomuser.me/'
              },
              'createdAt': 'July 31, 2015'
            },
            {
              'id': '56f137f46ba885ffacf4d3ff',
              'title': 'ut ipsum ut nostrud',
              'thumbnail': 'https://unsplash.it/400/400',
              'creator': {
                'name': 'nisi aliquip',
                'profileUrl': 'https://randomuser.me/'
              },
              'createdAt': 'July 5, 2015'
            },
            {
              'id': '56f137f48510226968e8c9e7',
              'title': 'anim id enim duis',
              'thumbnail': 'https://unsplash.it/400/400',
              'creator': {
                'name': 'exercitation commodo',
                'profileUrl': 'https://randomuser.me/'
              },
              'createdAt': 'July 11, 2015'
            },
            {
              'id': '56f137f40684a0672110741c',
              'title': 'consectetur dolor nisi amet',
              'thumbnail': 'https://unsplash.it/400/400',
              'creator': {
                'name': 'minim velit',
                'profileUrl': 'https://randomuser.me/'
              },
              'createdAt': 'May 3, 2015'
            },
            {
              'id': '56f137f408cec65e5e9aefc6',
              'title': 'laborum do duis reprehenderit',
              'thumbnail': 'https://unsplash.it/400/400',
              'creator': {
                'name': 'adipisicing ullamco',
                'profileUrl': 'https://randomuser.me/'
              },
              'createdAt': 'June 30, 2014'
            },
            {
              'id': '56f137f4c607b02dbfee5c91',
              'title': 'est consectetur magna ullamco',
              'thumbnail': 'https://unsplash.it/400/400',
              'creator': {
                'name': 'anim eu',
                'profileUrl': 'https://randomuser.me/'
              },
              'createdAt': 'March 4, 2015'
            },
            {
              'id': '56f137f4fc5e9054dec2547e',
              'title': 'nostrud consectetur voluptate ea',
              'thumbnail': 'https://unsplash.it/400/400',
              'creator': {
                'name': 'deserunt magna',
                'profileUrl': 'https://randomuser.me/'
              },
              'createdAt': 'December 24, 2014'
            }
          ]
        }
      }
    }
  }
  </script>