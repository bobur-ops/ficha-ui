const actions = {
  async mentorLogin({ commit }, data) {
    try {
      const response = await this.$axios.post('/mentors/login', data)
      localStorage.currentMentor = JSON.stringify(response.data)
      commit('SET_MENTOR', response.data)
      commit('SET_ERROR', false)
    } catch (error) {
      commit('SET_ERROR', true)
    }
  },

  async getMentors({ commit }) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.get('/mentors')
      commit('SET_MENTORS', response.data)
      commit('SET_ERROR', false)
      commit('SET_LOADING', false)
    } catch (error) {
      commit('SET_LOADING', false)
      commit('SET_ERROR', true)
    }
  },
}

const mutations = {
  SET_MENTOR(state, data) {
    state.currentMentor = data
  },
  SET_MENTORS(state, data) {
    state.mentors = data
  },
  SET_ERROR(state, status) {
    state.error = status
  },

  SET_LOADING(state, status) {
    state.loading = status
  },
}

const getters = {
  mentor: (s) => s.currentMentor,
  mentors: (s) => s.mentors,
  error: (s) => s.error,
  mentorsLoading: (s) => s.loading,
}

const state = {
  mentors: [],
  currentMentor: {},
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
