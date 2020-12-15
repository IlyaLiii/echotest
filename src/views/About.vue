<template>
  <div class="ymap-container">
      <p>
        Предоставьте ваши данные геолокации для корректного оторажения карты...
        <button @click="locateMe">Предоставить!</button>
      </p>
    <div id="app" style="height: 800px;">
    <yandex-map
        :coords="coords"
        zoom=10>
      <div v-if="isButtonDisabled">
      <ymap-marker
          :coords="coords"
          marker-id="123123"
          marker-type="Placemark"
      />
      <ymap-marker
          :coords="coords"
          marker-id="123123"
          marker-type="Circle"
          circle-radius= '500'
      /></div>
      <div>
        <button class="back" @click="back">Назад</button>
      </div>
    </yandex-map>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data: () => ({
    isButtonDisabled: false,
    location: null,
    gettingLocation: false,
    errorStr: null,
    coords: [null, null],
    placemarks: [
      {
        coords: [null, null],
        properties: {
          balloonContentBody: 'asdfd',
          balloonContentFooter: '1',
          balloonContentHeader: '1',
        },
        clusterName: '1',
        markerId: '1',
      },
      {
        coords: [null, null],
        properties: {
          balloonContentBody: 'asdfasdf',
          balloonContentFooter: '1',
          balloonContentHeader: '1',
        },
        clusterName: '1',
        markerId: '2',
      },
      {
        coords: [null, null],
        properties: {
          balloonContentBody: 'asdfasdf',
          balloonContentFooter: '1',
          balloonContentHeader: '1',
        },
        clusterName: '1',
        markerId: '3',
      },
    ],
    layout: '<div>{{ properties.balloonContentHeader }}</div><div>{{ properties.balloonContentBody }}</div><div>{{ properties.balloonContentFooter }}</div>',
  }),
  methods: {
    async getLocation() {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }
        navigator.geolocation.getCurrentPosition((pos) => {
          resolve(pos);
        }, (err) => {
          reject(err);
        });
      });
    },
    async locateMe() {
      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();
      } catch (e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
      this.coords = [this.location.coords.latitude, this.location.coords.longitude];
      this.isButtonDisabled = true;
    },
    back() {
      this.$router.push('/');
    },
  },
};
</script>
<style>
.ymap-container {
  height: 100%;
  width: 100%;
}
button{
  width: 120px;
}
back{
  height: 45px;
}
</style>
