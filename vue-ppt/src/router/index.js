import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index'),
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import(/* webpackChunkName: "about" */ '../views/home/index'),
                meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
