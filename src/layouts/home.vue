<template>

  <prezis v-bind:prezis="layoutData.items.preziEntries">

</template>
<style lang='scss'>
 
</style>

<script>
  import Storage from '../storage.js'
  import Prezis from '../components/prezi'
  export default {
    components: {
      Prezis
    },
    data () {
      return {
        layoutData: {
          'items': {}
        }
      }
    },
    created () {
      const preziCollectionID = this.$route.props.preziCollectionID
      const fetchData = Storage.getEntry(preziCollectionID, 1)
      fetchData
      .then((results) => {
        this.layoutData.items = results.items
      })
      .catch((reject) => {
        console.log(reject)
      })
    }
  }
  </script>