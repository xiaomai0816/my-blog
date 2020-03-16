<template>
  <div class="main-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MainContent"
  }
</script>

<style scoped>
  .main-content{
    height: 900px;
    border: 1px solid red;
  }
</style>