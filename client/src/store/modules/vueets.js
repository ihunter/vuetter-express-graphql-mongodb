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
    },
    addVueet (state, vueet) {
      state.vueets = [vueet, ...state.vueets]
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
        error.message = 'Failed to fetch vueets'
        console.error(error)
        commit('setError', error)
      } finally {
        commit('setLoadingVueets', false)
      }
    },
    async createVueet ({ commit }, payload) {
      try {
        const res = await vueet.post(payload)
        const newVueet = res.data.data.createVueet
        commit('addVueet', newVueet)
      } catch (error) {
        error.message = 'Failed to create vueet'
        console.error(error)
        commit('setError', error)
      }
    }
  }
}
