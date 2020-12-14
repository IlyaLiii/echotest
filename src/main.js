import Vue from 'vue';
import Vuelidate from 'vuelidate';
import YmapPlugin from 'vue-yandex-maps';
import VueSidebarMenu from 'vue-sidebar-menu';
import App from './App.vue';
import router from './router';
import store from './store';
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import 'vue-sidebar-menu/src/scss/vue-sidebar-menu.scss';

Vue.use(VueSidebarMenu);
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
