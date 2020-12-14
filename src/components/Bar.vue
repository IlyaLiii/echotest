<template>
  <progress value="{{i}}"></progress>
</template>

<script>
export default {
  name: 'Bar',
  data() {
    return {
      i: 0,
    };
  },
};
</script>

<style scoped>
progress {
  color: red;
}
</style>
