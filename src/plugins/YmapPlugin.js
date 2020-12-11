import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

const settings = {
  apiKey: 'fdeb1561-ef41-4c0c-a077-9d1f39d06da6\n',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
};

Vue.use(YmapPlugin, settings);
