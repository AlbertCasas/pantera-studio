import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/StudioView.vue')
    },
    {
      path: '/mobility',
      name: 'mobility',
      component: () => import('../views/MobilityView.vue')
    },
    {
      path: '/calxurru',
      name: 'xurru',
      component: () => import('../views/XurroView.vue')
    },
    {
      path: '/mansamigues',
      name: 'amigues',
      component: () => import('../views/AmiguesView.vue')
    },
    {
      path: '/magiccereal',
      name: 'cereal',
      component: () => import('../views/CerealView.vue')
    },
    {
      path: '/breathe',
      name: 'breathe',
      component: () => import('../views/BreatheView.vue')
    },
    {
      path: '/pantera',
      name: 'pantera',
      component: () => import('../views/PanteraView.vue'),
    },
    {
      path: '/pointer',
      name: 'pointer',
      component: () => import('../views/PointerView.vue')
    },
    {
      path: '/lepetitbuda',
      name: 'lepetitbuda',
      component: () => import('../views/PetitBuda.vue')
    },
  ],
  scrollBehavior() {
    return {top: 0}
  }
})

export default router
