//管理员登录相关请求
import {request} from "./request";

//管理员登录
export function login(name,password,verifyCode) {
  return request({
    url:'/admin/login',
    params:{
      name,
      password,
      verifyCode
    }
  })
}