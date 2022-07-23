const actions = {
  async createPostForCheck({ commit }, data) {
    try {
      await this.$axios.post('/posts', data)
    } catch (error) {
      commit('SET_ERROR', true)
    }
  },

  async getPosts({ commit }) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.get('/posts')
      commit('SET_POST', response.data)
      commit('SET_LOADING', false)
    } catch (error) {
      commit('SET_ERROR', true)
      commit('SET_LOADING', false)
    }
  },

  async updatePost({ commit }, data) {
    try {
      await this.$axios.put('/postsProve', data)
    } catch (error) {
      commit('SET_ERROR', true)
    }
  },
}

const mutations = {
  SET_ERROR(state, status) {
    state.error = status
  },
  SET_POST(state, data) {
    state.posts = data
  },
  SET_LOADING(state, status) {
    state.isLoading = status
  },
}

const getters = {
  posts: (s) => s.posts,
  provedPosts: (s) => s.posts.filter((post) => post.proved),
  isError: (s) => s.error,
  isLoading: (s) => s.isLoading,
  postById: (s) => (id) => s.posts.find((p) => p.id === id),
}

const state = {
  posts: [],
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
