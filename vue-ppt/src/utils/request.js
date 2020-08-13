import axios from 'axios'
import { getToken } from "@/utils/auth"
import { Message } from 'element-ui'
import store from '@/store'

// 创建拦截器
const service = axios.create({
    baseURL: '',
    timeoutL: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['X-Token'] = getToken()
    }
    return config
}, error => {
    return Promise.reject(error)
})


// 响应拦截器
service.interceptors.response.use(response => {
    const res = response.data
    console.log(res)
    if (res.code !== 20000) {
        Message({
            message: res.message || 'error',
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(new Error(res.message || 'Error'))
    }else {
        return res.data
    }
}, err => {
    Message({
        message: err.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(err)
})


export default service