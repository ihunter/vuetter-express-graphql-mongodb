import vueet from '@/api/vueet'

export default {
  state: {
    vueets: [],
    loadingVueets: false
  },
  getters: {
    vueets (state) {
      return state.vueets
    },
    loadingVueets (state) {
      return state.loadingVueets
    }
  },
  mutations: {
    setVueets (state, vueets) {
      state.vueets = vueets
    },
    setLoadingVueets (state, loading) {
      state.loadingVueets = loading
    }
  },
  actions: {
    async fetchVueets ({ commit }) {
      try {
        commit('setLoadingVueets', true)
        const res = await vueet.index()
        const vueets = res.data.data.vueets
        commit('setVueets', vueets)
      } catch (error) {
        console.error(error)
      } finally {
        commit('setLoadingVueets', false)
      }
    }
  }
}
