<template>
  <div id="app">
    <Searcher/>
    <router-view/>
  </div>
</template>

<script>

import Searcher from './components/Searcher/Searcher.vue';

export default {
  name: 'App',
  components : {
    Searcher,
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
