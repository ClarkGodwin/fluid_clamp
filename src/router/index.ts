import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: () => import("@/components/Home.vue")
  },
  { 
    path: '/clamp', 
    name: 'clamp',
    component: () => import("@/components/Clamp.vue")
  },
  { 
    path: '/settings', 
    name: 'settings',
    component: () => import('@/components/Settings.vue')
  },
];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
