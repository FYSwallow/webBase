import {
    SET_TOKEN,
    SET_NAME,
    SET_AVATAR,
    TOGGLE_SIDEBAR,
    TOGGLE_DEVICE
} from './mutation-types'

import { login, getInfo } from '@/api/user.js'
import { setToken } from '../utils/auth'

const actions = {
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username, password }).then(res => {
                console.log(res)
                commit(SET_TOKEN, res.token)
                setToken(res.token)
                resolve()
            }).catch(err => {
                reject(err)
            })
        })
    },
    getUserInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(res => {
                commit(SET_NAME, res.name)
                commit(SET_AVATAR, res.avatar)
                resolve()
            }).catch((err) => {
                reject(err)
            })
        })
    },

    // 切换侧边栏的显示状态
    changeSideBar({commit}) {
        commit(TOGGLE_SIDEBAR)
    },
    // 切换侧边栏的显示状态
    toggleDevice({commit}, val) {
        commit(TOGGLE_DEVICE, val)
    }
}

export default actions