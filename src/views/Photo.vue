<template>
  <div class="main_cont">
    <div>
      <img class="ava" src="@/assets/avatar.jpg" alt="Здесь будет превью вашего аватара"
           v-if="!imageupload"/>
      <img class="ava" :src=image alt="Здесь будет превью вашего аватара"
           v-if="imageupload"/>
    </div>
    <div class="container">
      <br><br>
      <h3>{{ message }}</h3>
      <input @change="handleImage" class="inp" type="file" accept="image/*"><br>
    </div>
    <div>
      <button class="back" @click="back">Назад</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'photo.vue',
  data: () => ({
    message: 'Выберите аватар!',
    image: '',
    imageupload: false,
  }),
  mounted() {
    this.image = '@/assets/logo.png';
  },
  methods: {
    ...mapActions(['GET_IMAGE']),
    //
    handleImage(e) {
      const selectedImage = e.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
        console.log(this.image);
        this.GET_IMAGE({ image: this.image });
        this.imageupload = true;
        this.message = 'Хороший выбор';
      };
      reader.readAsDataURL(fileObject);
    },
    back() {
      this.$router.push('about');
    },
  },
  // mounted() {
  //   console.log(this.$store.state.File);
  // },
  // watch: {
  //   img(newVal, oldVal) {
  //     console.log('watch', newVal, oldVal);
  //   },
  // },
};
</script>

<style>
.main_cont{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.ava{
  width: 300px;
  height: 300px;
  border-radius: 200px;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-left: 250px;
}
.inp{
  width: 400px;
  height: 30px;
}
button{
}
</style>
