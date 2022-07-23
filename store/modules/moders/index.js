const actions = {
  async moderLogin({ commit }, data) {
    try {
      const response = await this.$axios.post('/moders/login', data)
      localStorage.currentModer = JSON.stringify(response.data)
      commit('SET_MODER', response.data)
      commit('SET_ERROR', false)
    } catch (error) {
      commit('SET_ERROR', true)
    }
  },

  async getmoders({ commit }) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.get('/moders')
      commit('SET_MODERS', response.data)
      commit('SET_ERROR', false)
      commit('SET_LOADING', false)
    } catch (error) {
      commit('SET_LOADING', false)

      commit('SET_ERROR', true)
    }
  },
}

const mutations = {
  SET_MODER(state, data) {
    state.currentModer = data
  },
  SET_MODERS(state, data) {
    state.moders = data
  },
  SET_ERROR(state, status) {
    state.error = status
  },
  SET_LOADING(state, status) {
    state.loading = status
  },
}

const getters = {
  moder: (s) => s.currentModer,
  moders: (s) => s.moders,
  error: (s) => s.error,
  modersLoading: (s) => s.loading,
}

const state = {
  moders: [],
  currentModer: {},
  error: false,
  loading: false,
}

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
}
