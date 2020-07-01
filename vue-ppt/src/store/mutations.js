import {
    SET_TOKEN,
} from './mutation-types'

export default {
    // 获取当前开始栏选择的操作属性
    [SET_TOKEN](state, val) {
        console.log(val)
        state.token = val
    }
}