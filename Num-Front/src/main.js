import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/Auth/LoginView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/login', component: LoginView }
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
