import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null
  },
  getters: {
    token (state) {
      return state.token
    },
    user (state) {
      return state.user
    }
    // userVueetCount (state) {
    //   return state.user.vueets.length
    // },
    // userFollowingCount (state) {
    //   return state.user.following.length
    // },
    // userFollowersCount (state) {
    //   return state.user.followers.length
    // }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    }
  }
})
