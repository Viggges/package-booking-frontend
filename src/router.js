import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import packageIn from './views/packageIn.vue'
import packageList from './views/PackageList.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: packageIn
    },
    {
      path: '/',
      name: 'noob-list',
      component: packageList
    }
  ]
})
