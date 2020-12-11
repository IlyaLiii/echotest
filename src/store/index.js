import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: '123123',
    pass: '123',
  },
  mutations: {
    increment(state) {
      state.login = 'valid';
    },
  },
  actions: {
  },
  modules: {
  },
});
