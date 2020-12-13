import Vue from 'vue'
import VueRouter from 'vue-router'

import Page from '../views/page'
import About from '../views/about'

Vue.use(VueRouter)

const routes = [
    {
        path: '/page',
        name: 'home',
        component: Page
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    routes 
})
export default router