<template>
  <div class="main-body">
    <top>
      <nav-bar class="nav-bar" :titles="titles"/>
    </top>
   <slot></slot>
    <bottom/>
  </div>
</template>
<!--主页的内容-->
<script>
  import Top from "../../common/top/Top";
  import Bottom from "../../common/bottom/Bottom";

  import NavBar from "../navBar/NavBar";


  export default {
    name: "MainBody",
    components:{
      Top,
      Bottom,
      NavBar
    },
    data(){
      return {
        titles:[
          {title: '主页',path:'/index'},
          {title: '友链',path:'/link'},
          {title: '关于',path:'/about'},
          {title: '后台登录',path:'/adminLogin'}
        ]
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    position: absolute;
    right: 25px;
    top: 10px;
  }
  .nav-bar-item{
    margin: 15px;
    cursor: pointer;
  }
</style>