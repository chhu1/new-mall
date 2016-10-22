import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './pages/Index'
import banner from './pages/Banner'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { name: 'index', path: '/', component: index },
    { name: 'banner', path: '/banner', component: banner }
  ]
})

export default router
