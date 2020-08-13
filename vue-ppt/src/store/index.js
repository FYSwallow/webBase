import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { getToken } from '../utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token: getToken(), // 选中的属性(操作方法)
      name: "", // 用户名
      avatar: "", //用户头像
      // 设备信息
      device: "deskTop", // 默认大屏
      sidebar: {
          opened: true,
      }
  },
  mutations,
  actions,
  modules: {
  },
  getters
})
