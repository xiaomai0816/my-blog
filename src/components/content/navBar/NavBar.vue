<template>
  <div class="nav-bar">
    <div v-for="(item,index) in titles"
         :key="index"
         class="nav-bar-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index,item.path)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props:{
      titles:Array
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index,path){
        //导航栏点击事件
        //1.点击时动态添加active样式
        this.currentIndex = index

        //2.路由跳转
        console.log(this.$router);
        if(this.$router.history.current.path !== path){
          this.$router.replace(path)
        }

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