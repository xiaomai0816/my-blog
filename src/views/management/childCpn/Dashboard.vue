<template>
  <div>
    <h2>仪表盘</h2>
    <div class="box">
      <div class="box-item">
        <button @click="createArticle">新增博客</button>
      </div>
      <div class="box-item">显示总文章数</div>
      <div class="box-item">显示收到的评论数</div>
    </div>
    <div class="box">
    <div class="box-item">显示分类数量</div>
    <div class="box-item">显示标签个数</div>
    <div class="box-item">显示友情链接个数</div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "Dashboard",
    methods:{
      createArticle(){
        // console.log(this.$router);
        this.$router.replace("/management/postBlog")
      }
    }
  }
</script>

<style scoped>
  .box{
    /*width: 1253px;*/
    /*height: 340px;*/
    display: flex;
  }
  .box .box-item{
    height: 145px;
    width: 400px;
    border: 1px solid red;
    flex: 1;
  }
</style>