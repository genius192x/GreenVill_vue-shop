import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
	meta: { transition: 'slide-left' },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
	meta: { transition: 'slide-right' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
	meta: { transition: 'slide-right' },
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
	meta: { transition: 'slide-right' },
    component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue')
  },
  {
    path: '/delas',
    name: 'delas',
	meta: { transition: 'slide-right' },
    component: () => import(/* webpackChunkName: "about" */ '../views/DelasView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
