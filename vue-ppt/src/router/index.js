import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout/index'
Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = VueRouter.prototype.push

// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: layout,
        meta: { title: '根' },
        children: [
            {
                path: 'dashboard',
                component: () => import('../views/dashboard'),
                hidden: false,
                meta: { title: '数据统计表' },
                children: [
                    {
                        path: 'table',
                        component: () => import('../views/form'),
                        meta: {
                            title: '表格'
                        }
                    }
                ]
            },
        ]

    },
    {
        path: '/login',
        component: () => import('../views/login'),
        meta: { title: '登录' }
    },
    {
        path: '/form',
        component: layout,
        redirect: '/form/table',
        meta: { title: '表单' },
        children: [
            {
                path: 'table',
                component: () => import('../views/form'),
                meta: {
                    title: '表格'
                }
            }
        ]

    },
    // {
    //     component: layout,
    //     path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
    //     meta: { title: 'External Link', icon: 'link' }
    // },

]

const router = new VueRouter({
    routes
})

export default router
