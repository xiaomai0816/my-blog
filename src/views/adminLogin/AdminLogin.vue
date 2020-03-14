<template>
  <div class="login-box">
      <h1>personal blog</h1>
      <div class="form-group">
        <div class="wrapper">
          <i style="font-size: 35px" class="el-icon-user-solid"></i>
          <el-input clearable class="input" v-model="form.userName" placeholder="请输入用户名"></el-input>
        </div>

        <div class="wrapper">
          <i style="font-size: 35px" class="el-icon-lock"></i>
          <el-input class="input" v-model="form.password" placeholder="请输入密码" show-password></el-input>
        </div>

        <div class="wrapper">
          <el-input class="verifyCode" v-model="form.verifyCode" placeholder="请输入验证码"></el-input>
          <img :src="codeUrl" @click="refreshCode" width="150px" height="40px" alt="">
        </div>
        <el-button type="primary" @click="loginClick">登录</el-button>
      </div>
  </div>
</template>
<!---->
<script>
  import {login} from "../../network/adminLogin";

  export default {
    name: "AdminLogin",
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#e9ecef')
    },
    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
    created() {

    },
    data(){
      return {
       form:{
         userName:'',
         password:'',
         verifyCode:''
       },
       codeUrl:'http://localhost:8088/verifyCode'
      }
    },
    methods:{
      refreshCode(){
        // console.log('refreshCode');
        // this.codeUrl = 'http://localhost:8088/verifyCode?' + Math.random()
        this.codeUrl = 'http://localhost:8088/verifyCode?' + Math.random()
      },
      loginClick(){
        console.log('loginClick');
        if (!this.form.userName.trim()){
          alert('请输入用户名')
          return
        }
        if (!this.form.verifyCode.trim()){
          alert('请输入密码')
          return
        }
        if (!this.form.verifyCode.trim()){
          alert('请输入验证码')
          return
        }

        //发送请求
        login(this.form.userName,this.form.password,this.form.verifyCode).then(res => {
          console.log(res);
          this.$router.push('/management')
        })


      }
    }
  }
</script>

<style scoped>
  .login-box{
    width: 360px;
    height: 435px;
    /*border: 1px solid red;*/
    margin: 0 auto;
    margin-top: 7%;
    background-color: white;
    box-shadow: 0px 0px 5px #8c939d;
  }
  .login-box h1{
    text-align: center;
    color: #007BFF;
  }
  .wrapper{
    height: 60px;
    margin: 20px 0;
    /*border: 1px solid red;*/
    text-align: center;
  }
  .wrapper .input{
    width: 200px;
  }
  .form-group{
    margin: 0 auto;
  }
  .verifyCode{
    width: 150px;
  }

</style>