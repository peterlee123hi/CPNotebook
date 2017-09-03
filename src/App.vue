<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/style/normalize.css'
import './assets/style/app.scss'
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,800');
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,800');

#app {
  font-family: 'Avenir', 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
}
</style>
