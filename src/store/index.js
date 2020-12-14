import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      login: '',
      pass: '',
    },
    image: {},
    File: {},
  },
  mutations: {
    FORM_AUTO(state, data) {
      state.form.login = data.login;
      state.form.pass = data.pass;
    },
    UPLOAD_IMG(state, data) {
      state.image = { ...data };
    },
    UPLOAD_FILE(state, data) {
      state.File = { ...data };
    },
  },
  actions: {
    FETCH_USER: ({ commit }, data) => new Promise((resolve) => {
      setTimeout(
        () => resolve(data),
        4000,
      );
    }).then(({ login, pass }) => {
      console.log('успешно');
      commit('FORM_AUTO', { login, pass });
    }).catch((error) => {
      throw new Error(error);
    }),
  },
});
