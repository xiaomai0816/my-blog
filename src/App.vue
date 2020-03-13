<template>
  <div id="app">
    <main-body>
      <router-view></router-view>
    </main-body>
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
