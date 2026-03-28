import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/Auth/LoginView.vue'
import ForgotPasswordView from './views/Auth/ForgotPasswordView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/forgot-password', component: ForgotPasswordView }
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
      secondary: '#2eaf11de'
    }
  }
})

myApp.use(router)
myApp.mount('#app')
