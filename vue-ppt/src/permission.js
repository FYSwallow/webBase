import router from '@/router/index'
// import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' 
import { getToken } from './utils/auth'

// NProgress.configure({ showSpinner: false })

router.beforeEach((to, form, next)=> {
    NProgress.start()
    const hasToken = getToken()
    if (hasToken) {
        // if (to.path === '/login') {
        //     next({path: '/'})
        //     NProgress.done()
        // } else {
        //     next()
        // }
        next({path: '/login'})
    } else {
        next({path: '/login'})
    }
    NProgress.done()
})

router.afterEach(()=> {
    NProgress.done()
})