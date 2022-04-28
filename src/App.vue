<template>
<div id="app">
  <common-header v-if='$route.meta.isShowHeader'></common-header>
  <router-view></router-view>
  <!-- <common-footer></common-footer> -->
</div>
</template>

<script>

import CommonHeader from './components/CommonHeader'
export default {
  name: 'App',
  components: {
    CommonHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
 
}
li{
  list-style: none;
}
</style>
