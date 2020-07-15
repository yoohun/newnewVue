import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/index'
},{
  path: '/Theme',
  component: () => import('../components/Theme.vue'),
  meta: {title : '模板'}
},{
  path: '/index',
  component: () => import('../components/Index.vue'),
  meta: {title : '首页'}
},
// 校园用户
{
  path: '/',
  component: () => import("../components/Index"),
  children: [{
    path: 'home/home',
    component: () => import("../components/campUser/home"),
    meta: {title: 'shouye', permission: 1}
  },{
    path: 'home/message',
    component: () => import("../components/campUser/message"),
    meta: {title: '系统通知', permission: 1}
  },{
    path: '/403',
    component: () => import('../components/commonPage/403'),
    meta: {title : '权限不足'}
  }]
},



// 超管 二级用户
{
  path:'/admin',
  component: () => import("../components/Index.vue"),
  meta: { title : ''},
  children:[{
    path: 'schoolCode',
    component: () => import("../components/insideUser/schoolCode"),
    meta: {
      title: '校园码',
      permission: 2
    }
  },{
    path: 'home',
    component: () => import("../components/insideUser/home"),
    meta: {
      title: '首页',
      permission: 2
    }
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router