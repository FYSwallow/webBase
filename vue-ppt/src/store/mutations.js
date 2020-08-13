import {
    SET_TOKEN,
    SET_NAME,
    SET_AVATAR,
    TOGGLE_SIDEBAR,
    TOGGLE_DEVICE
} from './mutation-types'

export default {
    // 获取token值
    [SET_TOKEN](state, val) {
        console.log(val)
        state.token = val
    },
    // 获取用户名
    [SET_NAME](state, val) {
        console.log(val)
        state.name = val
    },
    // 获取用户头像
    [SET_AVATAR](state, val) {
        console.log(val)
        state.avatar = val
    },
    // 侧边栏打开或关闭
    [TOGGLE_SIDEBAR](state) {
        state.sidebar.opened = !state.sidebar.opened
    },
    // 获取设备信息
    [TOGGLE_DEVICE](state, val) {
        state.device = val
    }
}