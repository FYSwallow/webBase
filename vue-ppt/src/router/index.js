import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from './homeRoute'
import workRoutes from './workRoute'
Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: '/',
        redirect: '/mydir',
        component: () => import('../layout/home/index'),
        children: [...homeRoutes]
    },
    {
        path: '/workSpace',
        redirect: '/workSpace/start',
        component: () => import('../layout/workspace/index'),
        children: [...workRoutes],
    }
]

const router = new VueRouter({
    routes
})

export default router
