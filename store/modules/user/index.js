import { decode } from 'jsonwebtoken'

const actions = {
  async register({ commit }, data) {
    try {
      const response = await this.$axios.post('user/signup', data)
      const user = decode(response.data.access_token)
      localStorage.setItem('jwtoken', response.data.access_token)
      localStorage.loggedUserLogin = data.login
      commit('SET_USER', user)
    } catch (error) {
      commit('SET_ERROR')
    }
  },

  async userLogin({ commit }, data) {
    try {
      const response = await this.$axios.post('/user/login', data)
      const user = decode(response.data.access_token)
      localStorage.setItem('jwtoken', response.data.access_token)
      localStorage.loggedUserLogin = data.login
      commit('SET_USER', user)
    } catch (error) {
      commit('SET_ERROR')
    }
  },

  async getUser({ commit }, login) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.get(`/user/${login}`)
      commit('GET_USER', response.data)
      commit('SET_LOADING', false)
    } catch (error) {}
  },

  async getUsers({ commit }) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.get(`/user`)
      commit('GET_USERS', response.data)
      commit('SET_LOADING', false)
    } catch (error) {}
  },

  logout({ commit }) {
    commit('USER_LOGOUT')
    localStorage.clear()
  },

  async updateUser({ commit }, data) {
    try {
      const response = await this.$axios.put(`/user/${data.login}`, data)
      commit('SET_USER', response)
    } catch (error) {}
  },
}
const mutations = {
  SET_USER(state, data) {
    state.user = data
    state.isLoggedIn = true
  },
  GET_USER(state, data) {
    state.user = data
  },
  SET_ERROR(state) {
    state.error = true
  },
  USER_LOGOUT(state) {
    state.user = {}
    state.isLoggedIn = false
    localStorage.loggedUserLogin = ''
  },
  SET_LOADING(state, status) {
    state.isLoading = status
  },
  GET_USERS(state, users) {
    state.allUsers = users
  },
}
const getters = {
  user(state) {
    return state.user
  },
  isError(state) {
    return state.error
  },
  isLoggedIn(state) {
    return state.isLoggedIn
  },
  isLoading(state) {
    return state.isLoading
  },
  users(state) {
    return state.allUsers
  },
  error(state) {
    return state.error
  },
}

const state = {
  user: {},
  allUsers: [],
  isLoggedIn: false,
  token: null,
  error: false,
  isLoading: false,
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
