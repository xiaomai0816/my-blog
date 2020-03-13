<template>
  <div id="top">
    <slot></slot>
  </div>
</template>
<!--top区域-->
<script>
  export default {
    name: "Top"
  }
</script>

<style scoped>
  #top {
    background: url("~assets/img/header.jpg") no-repeat center center;
    width: 100%;
    height: 275px;
  }
</style>