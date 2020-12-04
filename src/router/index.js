/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import blogEdit from "../views/blogEdit"
import blogDetail from "../views/blogDetail"
import blogs from "../views/blogs"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      /*主页面*/
      path: '/',
      name: 'index',
      redirect:{name:"blogs"}
    },{
      path: '/blogs',
      name: 'blogs',
      component: blogs
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/blog/add',
      name: 'blogEdit',
      component: blogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blogDetail',
      component: blogDetail
    },
    {
      path: '/blog/:blogId/edit',
      name: 'blogEdit',
      component: blogEdit
    }
  ]
})
