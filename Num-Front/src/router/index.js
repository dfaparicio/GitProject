import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: 'register', 
        name: 'Register',
        component: () => import('views/RegisterView.vue') 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_ROUTER_BASE),
  routes
})

export default router
