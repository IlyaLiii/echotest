import Vue from 'vue';
import Vuelidate from 'vuelidate';
import YmapPlugin from 'vue-yandex-maps';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuelidate);

Vue.config.productionTip = false;

const settings = {
  apiKey: 'fdeb1561-ef41-4c0c-a077-9d1f39d06da6',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
};

Vue.use(YmapPlugin, settings);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
