import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Shopping from './views/Shopping';
import User from './views/User';
import Register from './views/Register';
import Login from './views/Login';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import(/* webpackChunkName: "shopping" */ './views/Shopping.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),

    },
      {
          path:'/register',
          name:'register',
          component:() => import('./views/Register.vue')
      },
      {
          path:'/login',
          name:'login',
          component:() => import('./views/Login.vue')
      }

    ]
})
