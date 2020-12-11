<template>
  <button @click="$emit('click')">{{ btn_mes }}</button>
</template>

<script>
export default {
  name: 'btn-component',
  data() {
    return {
      message: 'homepage',
      btn_mes: 'Submit',
    };
  },
};
</script>
<style>
button {
  width: 160px;
  height: 20px;
}
</style>
