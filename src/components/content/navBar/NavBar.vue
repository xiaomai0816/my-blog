<template>
  <div class="nav-bar">
    <div v-for="(item,index) in titles"
         :key="index"
         class="nav-bar-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props:{
      path:String
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        //导航栏点击事件
        //1.点击时动态添加active样式
        this.currentIndex = index

        //2.路由跳转
        console.log(this.$router);
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    width: 330px;
    height: 50px;
    color: white;
    font-weight: bold;
    line-height: 50px;
  }
  .nav-bar-item{
    flex: 1;
    cursor: pointer;
  }
  .active{
    color:coral;
  }
</style>