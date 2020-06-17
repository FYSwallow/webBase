import {
    GET_START_SELECT_TYPE,
} from './mutation-types'

export default {
    // 获取当前开始栏选择的操作属性
    [GET_START_SELECT_TYPE](state, val) {
        console.log(val)
        state.startSelectType = val
    }
}