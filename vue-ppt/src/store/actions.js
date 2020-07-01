import {
    SET_TOKEN
} from './mutation-types'

import { login } from '@/api/user.js'
import { setToken } from '../utils/auth'

const actions = {
    login({commit}, userInfo) {
        const {username, password} = userInfo
        return new Promise((resolve, reject) => {
            login({username, password}).then(res => {
                commit(SET_TOKEN, res)
                setToken(res.token)
                resolve()
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default actions