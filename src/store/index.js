import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_login: '',
    user_pass: '',
    count: 0,
  },
  mutations: {
    Authorization_log(state, { login }) {
      state.user_login = login;
    },
    Authorization_pass(state, { pass }) {
      state.user_pass = pass;
    },
    increment(state, { n }) {
      state.count += n;
    },
  },
  actions: {
    // ------------------------
    // GET_USER({ commit }) {
    //   console.log('sss');
    //   commit('Authorization_log');
    //   commit('Authorization_pass');
    // },
    // GET_USER({ commit }, login) {
    //   console.log('sss');
    //   commit('Authorization_log', login);
    // },
    // GET_USER({ commit }) {
    //   return axios('http://localhost:8081/', {
    //     method: 'GET',
    //   })
    //     .then((login) => {
    //       commit('Authorization_log');
    //       return login;
    //     })
    //     .then((pass) => {
    //       commit('Authorization_pass');
    //       return pass;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       return error;
    //     });
    // },
    // ------------------------
    // GET_USER({ commit }, login, pass) {
    //   const fetch = new Promise((resolve, reject) => {
    //     setTimeout(
    //       () => axios('http://localhost:8081/', {
    //         method: 'GET',
    //       }),
    //       3000,
    //     ).then((login) => {
    //       console.log('успешно');
    //       commit('Authorization_log', login);
    //       resolve('done login');
    //       reject(new Error('fail login'));
    //       return login;
    //     });
    //     fetch.then((pass) => {
    //       commit('Authorization_pass', pass);
    //       resolve('done pass');
    //       reject(new Error('fail pass'));
    //       return pass;
    //     }).catch((error) => {
    //       console.log(error);
    //       return error;
    //     });
    //   });
    // },
  },
});
