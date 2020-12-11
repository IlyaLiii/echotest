<template>
  <div class="home">
    <img src="@/assets/logo.png" alt="">
    <p v-if="check_auto">Переходим на другой url...</p>
    <progress class="progress" v-if="check_auto"></progress>
    <br><br>
    <div class="form-group"  :class="{ 'form-group--error': $v.login.$error }">
    <input
        ref="login"
        v-model.trim="login" type="text" placeholder="Login: "
        @blur="$v.login.$touch()">
    </div>
    <div class="error" v-if="!$v.login.required && $v.login.$error">Field is required</div>
    <div class="error" v-if="!$v.login.minLength && $v.login.$error">
      Name must have at least 5 letters.</div>
    <div class="form-group" :class="{ 'form-group--error': $v.pass.$error }"><br>
    <input
        ref="pass"
        v-model.trim="pass" type="text" placeholder="Password: "
        @blur="$v.pass.$touch()">
      <div class="error" v-if="!$v.pass.required && $v.pass.$error">Field is required</div>
      <div class="error" v-if="!$v.pass.minLength && $v.pass.$error">
        Name must have at least 5 letters.
      </div>
    </div>
    <br>
    <btn-component @click="submit" :disabled="isButtonDisabled"></btn-component><br>
  </div>
</template>

<script>
// @ is an alias to /src
import { required, minLength } from 'vuelidate/lib/validators';
import btn from '../components/Btn.vue';

export default {
  name: 'Home',
  components: {
    'btn-component': btn,
  },
  data: () => ({
    login: '',
    pass: '',
    isButtonDisabled: false,
    focused: false,
    check_auto: false,
    LOG: '',
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
    submit() {
      const fetch = new Promise(((resolve, reject) => {
        setTimeout(() => {
          this.$v.login.$touch();
          this.$v.pass.$touch();
          if (!(this.$v.login.$error
              || this.$v.pass.$error)
          ) {
            this.$store.commit('Authorization_log', { login: this.login });
            this.$store.commit('Authorization_pass', { pass: this.pass });
            this.isButtonDisabled = true;
            this.check_auto = true;
            resolve('done');
          }
          reject(new Error('провал'));
        }, 1000);
      }));
      fetch
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            this.$router.push('about');
          },
          3000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    messageComp2: {
      get() {
        return this.message;
      },
      set(val) {
        this.message = val;
      },
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
  width: 100px;
  height: 20px;
}
input {
  width: 200px;
  height: 20px;
}
</style>
