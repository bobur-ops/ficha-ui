const actions = {
  async postApplication({ commit }, data) {
    try {
      commit('SET_LOADING', true)
      await this.$axios.post('/becomeMentor', data)
      commit('SET_LOADING', false)
      commit('SET_ERROR', false)
    } catch (error) {
      commit('SET_LOADING', false)
      commit('SET_ERROR', true)
    }
  },

  async getApplications({ commit }) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.get('/becomeMentor')
      commit('SET_APPLICATIONS', response.data)
    } catch (error) {
      commit('SET_LOADING', false)
      commit('SET_ERROR', true)
    }
  },

  async deleteApplication({ commit }, id) {
    try {
      await this.$axios.delete(`/becomeMentor/${id}`)
    } catch (error) {
      commit('SET_ERROR', true)
    }
  },
}
const mutations = {
  SET_LOADING(state, status) {
    state.isLoading = status
  },
  SET_ERROR(state, status) {
    state.isLoading = status
  },
  SET_APPLICATIONS(state, data) {
    state.applications = data
  },
}
const getters = {
  mentorApplications: (s) => s.applications,
  mentorsLoading: (s) => s.isLoading,
  isLoading: (s) => s.isLoading,
}
const state = {
  isError: false,
  applications: [],
  isLoading: false,
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
