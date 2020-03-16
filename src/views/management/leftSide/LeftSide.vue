<template>
  <div class="left-side">
    <div class="admin-info">
      <i class="el-icon-user-solid" style="font-size: 25px;"></i>
      <span class="info">阿川</span>
    </div>
    <!--侧栏-->
    <el-menu :default-active="this.$route.path" background-color="#343A40" text-color="#fff" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-monitor"></i>
          <span slot="title">仪表盘</span>
        </template>
          <el-menu-item index="/management/dashboard">仪表盘</el-menu-item>
          <el-menu-item index="/management/postBlog">发布博客</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-monitor"></i>
          <span slot="title">管理模块</span>
        </template>
        <el-menu-item index="/management/blogManagement">博客管理</el-menu-item>
        <el-menu-item index="/management/commentManagement">评论管理</el-menu-item>
        <el-menu-item index="/management/categoryManagement">分类管理</el-menu-item>
        <el-menu-item index="/management/labelManagement">标签管理</el-menu-item>
        <el-menu-item index="/management/link">友情链接</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-monitor"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="/management/systemConfiguration">系统配置</el-menu-item>
        <el-menu-item index="/management/updatePassword">修改密码</el-menu-item>
        <el-menu-item index="3-3">安全退出</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "LeftSide",
    created() {
      console.log(this.$router);
      console.log(this.$route.path);
    }
  }
</script>

<style scoped>
  .left-side{
    border: 1px solid red;
    height: 900px;
  }
</style>