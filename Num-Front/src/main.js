import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/Auth/LoginView.vue'
<<<<<<< HEAD
import ForgotPasswordView from './views/Auth/ForgotPasswordView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/forgot-password', component: ForgotPasswordView }
=======

const routes = [
  { path: '/', component: LoginView },
  { path: '/login', component: LoginView }
>>>>>>> 693a83e7c05e084a9606605360e3943401cae0d4
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const myApp = createApp(App)

myApp.use(Quasar, {
  config: {
    brand: {
      primary: '#003366',
      secondary: '#FFD700'
    }
  }
})

myApp.use(router)
myApp.mount('#app')
