<template>

  <entries v-bind:entries="layoutData.items.preziEntries">

</template>
<style lang='scss'>
 
</style>

<script>
  import Storage from '../storage.js'
  import Entries from '../components/entry'
  export default {
    components: {
      Entries
    },
    data () {
      return {
        layoutData: {
          'items': {}
        }
      }
    },
    created () {
      const entryCollectionID = this.$route.props.entryCollectionID
      const fetchData = Storage.getEntry(entryCollectionID, 1)
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