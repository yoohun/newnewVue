import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'; // elementUI主题
import "./assets/css/main.css";
import "./assets/css/index.css";
import "./assets/font/webFont/webFont.css" // 引入字体


// import { from } from 'core-js/fn/array'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
});


router.beforeEach((to, from, next)=>{ 
    document.title = `facejoy · ${to.meta.title}`;
    const userType = localStorage.getItem("userType");
    if(to.path=='/index'){
      // 对跳转的页面进行判断 如果需要跳转的页面是index 那么就可以判断了 如果当前的用户已经登录 那么就定位到对应的页面 如果没有登录 那么就要跳转到index.vue页面（即登录页面）
      if(userType == 0 || userType==1){
        next("/admin/home")
      } else if(userType==2 || userType==3){
        next("home/home")
      } else {
        next()
      }
    } else {
      // 如果当前访问的页面不是首页 那么判断当前是否有登录 没有那么就先登录
      if(userType==undefined) {
        next('/index');
      } else {
        if(to.path=='/403'){
          next(false);
        }
        if(to.meta.permission == null) {
          // 权限的判断 permission为null表示当前页面没有任何权限限制
          next()
        } else if(to.meta.permission ==1){
          userType==0 || userType==1 ? next() : next('/403');
        } else if(to.meta.permission ==2){
          userType==2 || userType==3 ? next() : next('/403');
        }
      }
    }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
