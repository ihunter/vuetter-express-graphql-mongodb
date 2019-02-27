export default {
  state: {
    error: null
  },
  getters: {
    error (state) {
      return state.error
    }
  },
  mutations: {
    setError (state, error) {
      console.log(error)
      state.error = error
    }
  }
}
