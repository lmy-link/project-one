/*
 * @Author: limy
 * @Date: 2020-12-02 10:54:27
 * @LastEditors: limy
 * @LastEditTime: 2020-12-16 09:52:29
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  login: () => import ('@/view/login'),
  home: () => import ('@/view/home'),
  element:() => import ('@/view/element/element'),
  echarts:() => import ('@/view/echarts/echarts'),
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
        },
        {
          path: 'echarts',
          name: 'echarts',
          meta: {
            desc: 'echarts'
          },
          component: components.echarts,  
        },
      ]
    }
  ]
})
