import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL:'http://localhost:8088',
    timeout:5000,
    withCredentials:true
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么?
    //1.比如过滤在config中的一些信息比符合服务器的要求
    //2.在网络请求成功之前添加一个loading动画，在成功后关闭loading动画
    //3.某些网络请求（比如登录token），必须携带一些特殊信息
    // console.log(config);
    //axios.defaults.withCredentials = true
    //instance.defaults.withCredentials = true
    return config
  }, error => {
    // 对请求错误做些什么
    console.log(error);
  })

  //响应拦截
  instance.interceptors.response.use(result => {
    // console.log(result);
    // return result
    return result.data
  }, error => {
    console.log(error);
  })

  //3.发送真正的网络请求
  return instance(config) //本身return的就是一个Promise对象
}