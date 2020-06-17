import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      startSelectType: "", // 选中的属性(操作方法)
  },
  mutations,
  actions,
  modules: {
  },
  getters
})
