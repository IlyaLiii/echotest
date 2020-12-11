import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_login: '',
    user_pass: '',
  },
  mutations: {
    Authorization_log(state, { login }) {
      state.user_login = login;
    },
    Authorization_pass(state, { pass }) {
      state.user_pass = pass;
    },
  },
  actions: {
  },
  modules: {
  },
});
