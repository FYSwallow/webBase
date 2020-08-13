import router from '@/router/index'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './utils/auth'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, form, next) => {
    NProgress.start()
    const hasToken = getToken()
    // 1. 判断有无token,有token值的情况,如果前往login页面则直接跳转至主界面
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            const hasGetUserInfo = store.getters.name
            console.log(store)
            if (hasGetUserInfo) {
                next()
            } else {
                console.log('getuserInfo-----permission')
                await store.dispatch('getUserInfo')
                next()
            }
        }
    } else {
        // 2. 无token值的时候,如果在主界面,当token不存在需要重定向至login,需要重新登录
        if (to.path === '/login') {
            next()
        } else {
            console.log(to)
            next(`/login?redirect=${to.path}`)
        }
    }
    NProgress.done()

})

router.afterEach(() => {
    NProgress.done()
})