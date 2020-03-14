<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import MainBody from "./components/content/mainBody/MainBody";
  export default {
    name: 'App',
    components: {
      MainBody
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
