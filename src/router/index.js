import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/novosti',
    name: 'Novosti',
    component: () => import('../views/Novosti.vue')
  },
  {
    path: '/xxi-saziv',
    name: 'Xxi-saziv',
    component: () => import('../views/XxiSaziv.vue')
  },
  {
    path: '/arhiva',
    name: 'Arhiva',
    component: () => import('../views/Arhiva.vue')
  },
  {
    path: '/dokumenti',
    name: 'Dokumenti',
    component: () => import('../views/Dokumenti.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Kontakt.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
