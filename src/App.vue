<template>
  <div id="app">
    <app-toolbar></app-toolbar>
  </div>
</template>

<script>
import AppToolbar from './components/AppToolbar.vue';

export default {
  name: 'App',
  components: {
    AppToolbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
