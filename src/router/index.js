//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由懒加载,把组件按组分块
const HomePage = () => import('../views/homePage/HomePage')
const Home = () => import('../views/homePage/home/Home')
const FriendlyLink = () => import('../views/homePage/friendlyLink/FriendlyLink')
const About = () => import('../views/homePage/about/About')

const AdminLogin = () => import('../views/adminLogin/AdminLogin')
const Management = () => import('../views/management/Management')



const routes = [
  //定义路由每个路由应该映射一个组件。
  {
    path:'',
    redirect:'/index'
  },
  {
    path:'/index',
    component:HomePage,
    children:[
      {
        path:'/',
        redirect:'/home',
      },
      {
        path:'/home',
        component:Home,
      },
      {
        path:'/link',
        component:FriendlyLink
      },
      {
        path:'/about',
        component:About
      }
    ]
  },
  {
    path:'/adminLogin',
    name:'adminLogin',
    component:AdminLogin
  },
  {
    path:'/management',
    name:'management',
    component:Management
  }
]


const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
