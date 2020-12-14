<template>
  <div class="main_cont">
    <div>
      <img class="ava" src="@/assets/avatar.jpg" alt="" />
    </div>
    <div class="container">
      <br><br>
      <h3>Выберите аватар:</h3>
      <input class="inp" type=file name="avatar" ref="file" @change="handleFileUpload()"><br>
      <img :src="imagePreview" v-show="showPreview"/>
      <p>{{this.$store.state.image}}</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'photo.vue',
  data: () => ({
    file: '',
    name: '',
    type: '',
    url: '',
    showPreview: false,
    imagePreview: '',
  }),
  methods: {
    handleFileUpload() {
      // console.log('Засабмитил хоть???');
      console.log(this.$refs.file.files[0]);
      this.file = { ...this.$refs.file.files[0] };
      console.log(this.file);
      this.name = this.$refs.file.files[0].name;
      this.type = this.$refs.file.files[0].type;
      this.url = this.file.url;
      console.log(this.name);
      console.log(this.url);
      //
      this.$store.commit('UPLOAD_IMG', { name: this.name, type: this.type });
      this.$store.commit('UPLOAD_FILE', { file: this.$refs.file.files[0] });

      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.showPreview = true;
        this.imagePreview = reader.result;
      }, false); // .bind(this)
      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    },
  },
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
  width: 350px;
  height: 350px;
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
