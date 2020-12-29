/*
 * @Author: limy
 * @Date: 2020-12-02 10:54:27
 * @LastEditors: limy
 * @LastEditTime: 2020-12-29 14:27:28
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
  todolist:() => import ('@/view/todolist'),
  elTree:() => import ('@/view/elTree/elTree'),
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
      redirect: '/home/toDoList',
      meta: {
        desc: '首页'
      },
      component: components.home,
      children:[
        {
          path: 'todolist',
          name: 'todolist',
          meta: {
            desc: '页面壹'
          },
          component: components.todolist,  
        },
        {
          path: 'element',
          name: 'element',
          meta: {
            desc: 'element-tree'
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
        {
          path: 'elTree',
          name: 'elTree',
          meta: {
            desc: 'elTree'
          },
          component: components.elTree,  
        },
      ]
    }
  ]
})
