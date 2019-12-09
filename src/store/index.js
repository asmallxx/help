import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: 1
  },
  mutations: {
    // addCount(state) {
    //   state.count++
    // },
    // subtractCount(state) {
    //   state.count--
    // }
    changactive(state, payload) {
      state.active = payload.active;
    }
  },

  actions: {},
  modules: {}
})