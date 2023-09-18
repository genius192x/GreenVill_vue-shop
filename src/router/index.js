import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { setMenuActive } from '@/components/menu.js'
const routes = [
  {
    path: '/',
    name: 'home',
	meta: { transition: 'slide-left' },
    component: HomeView
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/delas',
    name: 'delas',
    component: () => import('../views/DelasView.vue')
  },
  {
	path: '/shop/:id',
	name: 'shopId',
	component: ()=> import('../views/Product.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
	next();
	setMenuActive()
});
export default router
