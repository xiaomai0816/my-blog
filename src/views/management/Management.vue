<template>
  <div>
    <el-container>
      <el-aside>
        <left-side></left-side>
      </el-aside>
      <el-main>
        <main-top></main-top>
        <main-content>
          <router-view/>
        </main-content>
        <main-bottom></main-bottom>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import LeftSide from "./leftSide/LeftSide";
  import MainContent from "./mainContent/MainContent";
  import MainTop from "./mainTop/MainTop";
  import MainBottom from "./mainBottom/MainBottom";

  export default {
    name: "Management",
    components:{
      LeftSide,
      MainContent,
      MainTop,
      MainBottom
    }
  }
</script>

<style scoped>

</style>