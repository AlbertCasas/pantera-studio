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
      path: '/work',
      name: 'work',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/studio',
      name: 'studio',
      component: () => import('../views/StudioView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/work/mobility',
      name: 'mobility',
      component: () => import('../views/MobilityView.vue')
    },
    {
      path: '/work/calxurro',
      name: 'xurro',
      component: () => import('../views/XurroView.vue')
    },
    {
      path: '/work/mansamigues',
      name: 'amigues',
      component: () => import('../views/AmiguesView.vue')
    },
    {
      path: '/work/cerealbox',
      name: 'cereal',
      component: () => import('../views/CerealView.vue')
    },
    {
      path: '/work/breathe',
      name: 'breathe',
      component: () => import('../views/BreatheView.vue')
    },
    {
      path: '/work/pantera',
      name: 'pantera',
      component: () => import('../views/PanteraView.vue'),
    },
  ],
  scrollBehavior() {
    return {top: 0}
  }
})

export default router
