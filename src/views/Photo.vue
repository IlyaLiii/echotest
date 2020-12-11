<template>
  <div id="app" v-cloak>

    <p>
      Let us locate you for better results...
      <button @click="locateMe">Get location</button>
    </p>

    <div v-if="errorStr">
      Sorry, but the following error
      occurred: {{errorStr}}
    </div>

    <div v-if="gettingLocation">
      <i>Getting your location...</i>
    </div>

    <div v-if="location">
      Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'photo.vue',
  data: () => ({
    location: null,
    gettingLocation: false,
    errorStr: null,
  }),
};
</script>

<style scoped>
[v-cloak] {display: none}
</style>
