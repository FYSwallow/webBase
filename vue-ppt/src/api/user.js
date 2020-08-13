import request from "@/utils/request.js"

export const login = (data) => {
    return request ({
        url: '/login',
        method: 'post',
        data
    })
}

export const getInfo = (token) => {
    return request ({
        url: '/userInfo',
        method: 'post',
        data: {token}
    })
}