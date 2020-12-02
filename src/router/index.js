/*
 * @Author: limy
 * @Date: 2020-12-02 10:54:27
 * @LastEditors: limy
 * @LastEditTime: 2020-12-02 16:17:25
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  home: () => import ('@/view/home'),
  element:() => import ('@/view/element/element'),
};
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      meta: {
        desc: '主页'
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
