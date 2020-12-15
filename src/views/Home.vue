<template>
  <div class="home">
    <img class="logo" src="@/assets/logo.png" alt="logo" />
    <p v-if="check_auto">Переходим на другой url...</p>
    <progress class="progress" v-if="check_auto"></progress>
    <br /><br />
    <div class="form-group" :class="{ 'form-group--error': $v.login.$error }">
      <input
        ref="login"
        v-model.trim="login"
        type="text"
        placeholder="Логин: "
        @blur="$v.login.$touch()"
        :disabled="isButtonDisabled"
      />
    </div>
    <div class="error" v-if="!$v.login.required && $v.login.$error">Заполните поле!</div>
    <div class="error" v-if="!$v.login.minLength && $v.login.$error">
      Минимум 5 символов
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.pass.$error }">
      <br />
      <input
        ref="pass"
        v-model.trim="pass"
        type="text"
        placeholder="Пароль: "
        @blur="$v.pass.$touch()"
        :disabled="isButtonDisabled"
      />
      <div class="error" v-if="!$v.pass.required && $v.pass.$error">Заполните поле!</div>
      <div class="error" v-if="!$v.pass.minLength && $v.pass.$error">
        Минимум 5 символов
      </div>
    </div>
    <br />
    <btn-component @click="submit_auto" :disabled="isButtonDisabled"></btn-component><br />
  </div>
</template>

<script>
// @ is an alias to /src
import { required, minLength } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';
import btn from '../components/Btn.vue';

export default {
  name: 'Home',
  components: {
    'btn-component': btn,
  },
  data: () => ({
    image: '',
    login: '',
    pass: '',
    isButtonDisabled: false,
    focused: false,
    check_auto: false,
    LOG: '',
    n: 5,
  }),
  validations: {
    login: {
      required,
      minLength: minLength(5),
    },
    pass: {
      required,
      minLength: minLength(5),
    },
  },
  methods: {
    ...mapActions(['GET_IMAGE', 'FETCH_USER']),
    // submit_auto() {
    //   const fetch = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       this.$v.login.$touch();
    //       this.$v.pass.$touch();
    //       if (!(this.$v.login.$error || this.$v.pass.$error)) {
    //         this.$store.commit('Authorization_log', { login: this.login });
    //         this.$store.commit('Authorization_pass', { pass: this.pass });
    //         this.isButtonDisabled = true;
    //         this.check_auto = true;
    //         resolve('done');
    //       }
    //       reject(new Error('провал'));
    //     }, 1000);
    //   });
    //   fetch
    //     .then((res) => {
    //       console.log(res);
    //       setTimeout(() => {
    //         this.$router.push('about');
    //       }, 3000);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    async submit_auto() {
      this.$v.login.$touch();
      this.$v.pass.$touch();
      if (!(this.$v.login.$error || this.$v.pass.$error)) {
        this.isButtonDisabled = true;
        this.check_auto = true;
        await this.FETCH_USER({ login: this.login, pass: this.pass });
        this.$router.push('about');
      }
    },
  },
  watch: {
    message(newVal, oldVal) {
      console.log('watch', newVal, oldVal);
    },
  },
};
</script>
<style>
button {
  width: 200px;
  height: 40px;
}
input {
  width: 250px;
  height: 40px;
}
.logo{
  height: 350px;
  width: 350px;
}
</style>
