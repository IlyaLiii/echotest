<template>
  <div>
  <yandex-map :settings="settings" :coords="coords" @click="onClick">
    <ymap-marker
        marker-id="123"
        :coords="coords"
        :balloon-template="balloonTemplate"
    />
  </yandex-map>
  </div>
</template>
<script>
// @ is an alias to /src

import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default {
  components: { yandexMap, ymapMarker },
  data: () => ({
    coords: [54, 39],
    settings: {
      apiKey: 'fdeb1561-ef41-4c0c-a077-9d1f39d06da6\n',
      lang: 'ru_RU',
      coordorder: 'latlong',
      version: '2.1',
    },
  }),
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
        <img src="http://via.placeholder.com/350x150">
      `;
    },
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
  },
};
</script>
<style>
.red {
  color: red;
}
</style>
