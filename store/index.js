import Vue from 'vue'
import Vuex, { Store } from 'vuex'

// import modules
import applications from './modules/applications'
import user from './modules/user'
import mentors from './modules/mentors'
import moders from './modules/moders'
import admins from './modules/admins'
import posts from './modules/posts'
import becomeMentor from './modules/becomeMentor'

Vue.use(Vuex)

const modules = {
  applications,
  user,
  mentors,
  moders,
  admins,
  posts,
  becomeMentor,
}

export default () =>
  new Store({
    modules,
  })
