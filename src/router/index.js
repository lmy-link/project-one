/*
 * @Author: limy
 * @Date: 2020-12-02 10:54:27
 * @LastEditors: limy
 * @LastEditTime: 2020-12-04 17:28:03
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  login: () => import ('@/view/login'),
  home: () => import ('@/view/home'),
  element:() => import ('@/view/element/element'),
};
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        desc: '登录页面'
      },
      component: components.login,
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        desc: '首页'
      },
      component: components.home,
      children:[
        {
          path: 'element',
          name: 'element',
          meta: {
            desc: 'element-ui'
          },
          component: components.element,  
        }
      ]
    }
  ]
})
