import { SET_APPLICATIONS } from './types'

export default {
  async fetchApplications(context) {
    try {
      context.commit('SET_LOADING', true)
      const { data } = await this.$axios.get(
        'http://127.0.0.1:8000/application'
      )
      context.commit(SET_APPLICATIONS, data)
      context.commit('SET_LOADING', false)
    } catch (err) {
      context.commit('SET_LOADING', false)
    }
  },
}
