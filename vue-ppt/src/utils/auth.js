import Cookies from 'js-cookie'

const TokenKey = 'vue-admin-token'

// 获取token值
export const getToken = () => {
    return Cookies.get(TokenKey)
}

// 设置token值
export const setToken = (token) => {
    return Cookies.set(TokenKey, token)
}

// 移除token的值
export const removeToken = () => {
    return Cookies.remove(TokenKey)
}