import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/routes'
import createPersistedState from 'vuex-persistedstate'

import auth from '@/api/auth'

import vueets from './modules/vueets'
import error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    loadingUser: false
  },
  getters: {
    token (state) {
      return state.token
    },
    user (state) {
      return state.user
    },
    loadingUser (state) {
      return state.loadingUser
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    },
    setLoadingUser (state, loading) {
      state.loadingUser = loading
    }
  },
  actions: {
    async login ({ commit }, payload) {
      try {
        commit('setLoadingUser', true)
        const res = await auth.login(payload)
        const { token, user } = res.data.data.login
        commit('setUser', user)
        commit('setToken', token)
        router.push({ name: 'home' })
      } catch (error) {
        error.message = 'Failed to login'
        console.error(error)
        commit('setError', error)
      } finally {
        commit('setLoadingUser', false)
      }
    },
    async logout ({ commit }) {
      try {
        commit('setLoadingUser', true)
        commit('setToken', null)
        commit('setUser', null)
        router.push({ name: 'login' })
      } catch (error) {
        error.message = 'Failed to logout'
        console.error(error)
        commit('setError', error)
      } finally {
        commit('setLoadingUser', false)
      }
    }
  },
  modules: {
    vueets,
    error
  }
})
