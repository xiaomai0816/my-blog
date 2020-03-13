//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由懒加载,把组件按组分块
const Home = () => import('../views/home/Home')
const FriendlyLink = () => import('../views/friendlyLink/FriendlyLink')
const About = () => import('../views/about/About')
const AdminLogin = () => import('../views/adminLogin/AdminLogin')

const routes = [
  //定义路由每个路由应该映射一个组件。
  {
    path:'',
    redirect:'/index'
  },
  {
    path:'/index',
    component:Home
  },
  {
    path:'/link',
    component:FriendlyLink
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/adminLogin',
    component:AdminLogin
  }
]


const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
