<template>
  <div>
    <Count/>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import ListSearch from './components/ListSearch.vue';
import Count from './components/Count.vue';
export default {
    name: "App",
    components: { Search, ListSearch, Count, Count },
  mounted(){
      console.log('App',this)
    }
}
</script>

<style>
</style>