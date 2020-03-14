<template>
  <main-body>
    <router-view/>
  </main-body>
</template>

<script>
  import MainBody from "../../components/content/mainBody/MainBody";

  export default {
    name: "HomePage",
    components:{
      MainBody
    }
  }
</script>

<style scoped>

</style>