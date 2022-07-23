const actions = {
  async adminLogin({ commit }, data) {
    try {
      const response = await this.$axios.post('/admins/login', data)
      localStorage.currentAdmin = JSON.stringify(response.data)
      commit('SET_ADMIN', response.data)
      commit('SET_ERROR', false)
    } catch (error) {
      commit('SET_ERROR', true)
    }
  },

  async getadmins({ commit }) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.get('/admins')
      commit('SET_ADMINS', response.data)
      commit('SET_LOADING', false)
    } catch (error) {
      commit('SET_LOADING', false)
    }
  },
}

const mutations = {
  SET_ADMIN(state, data) {
    state.currentAdmin = data
  },
  SET_ADMINS(state, data) {
    state.admins = data
  },
  SET_LOADING(state, status) {
    state.loading = status
  },
  SET_ERROR(state, status) {
    state.error = status
  },
}

const getters = {
  admin: (s) => s.currentAdmin,
  admins: (s) => s.admins,
  adminsLoading: (s) => s.loading,
  error: (s) => s.error,
}

const state = {
  admins: [],
  currentAdmin: {},
  loading: false,
  error: false,
}

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
}
