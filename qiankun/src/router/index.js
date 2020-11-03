import Vue from 'vue'
import VueRouter from 'vue-router'

import Page from '../views/home/index.vue'
// import About from '../views/about'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Page
    },
]
const router = new VueRouter({
    routes
}) 

export default router