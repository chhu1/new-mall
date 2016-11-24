import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './app/pages/Index'
import banner from './app/pages/Banner'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { name: 'index', path: '/', component: index },
        { name: 'banner', path: '/banner', component: banner }
    ]
})

export default router
