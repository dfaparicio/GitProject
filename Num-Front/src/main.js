import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/Auth/LoginView.vue'
import RecoverView from './views/Auth/RecoverView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/recuperar', component: RecoverView }
  // TODO: Faltan las rutas del Dashboard y páginas protegidas
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const myApp = createApp(App)
myApp.use(Quasar, { config: { brand: { primary: '#003366', secondary: '#FFD700' } } })
myApp.use(router)
myApp.mount('#app')
