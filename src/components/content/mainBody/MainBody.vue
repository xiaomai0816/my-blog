<template>
  <div class="main-body">
    <top>
      <nav-bar class="nav-bar"/>
      <!--<div class="nav-bar">
        <nav-bar></nav-bar>
        &lt;!&ndash;<router-link v-for="(item,index) in titles"
                     :key="index"
                     @click="itemClick"
                     :to="item.path">{{item.title}}</router-link>&ndash;&gt;
        &lt;!&ndash;<div v-for="(item,index) in titles"
             :key="index"
             class="nav-bar-item" @click="itemClick">{{item}}</div>&ndash;&gt;
      </div>-->
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
          // {title: '主页',path:'index'},
          // {title: '友链',path:'link'},
          // {title: '关于',path:'about'},
          // {title: '后台登录',path:'adminLogin'}
        ]
      }
    },
    methods:{
      itemClick(){
        console.log('itemClick');
        console.log(this.$route)
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