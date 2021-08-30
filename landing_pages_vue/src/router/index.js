import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang/join',
    name: 'Home',
    component: Home
  },
  {
    path: '/:lang/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:lang/ambassador',
    name: 'Ambassador',
    component: () => import('../views/Ambassador.vue')
  },
  {
    path: '/:lang/whyride',
    name: 'WhyRide',
    component: () => import('../views/WhyRide.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
