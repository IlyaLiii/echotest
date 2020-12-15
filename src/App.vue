<template>
<div id="app">
  <div id="view" :class="[{'collapsed' : collapsed_main}]">
        <router-view/>
  </div>
      <sidebar-menu
    class="sidebar"
    :menu="menu_main"
    :collapsed="collapsed_main"
    @item-click="onItemClick"
    @collapse="onCollapse"
  >
        <div slot="footer">
          <img class="avatarka" src=@/assets/avatar.jpg alt="" v-if="!addimage">
          <img class="avatarka" :src=img alt="" v-if="addimage">
        </div>
      </sidebar-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      addimage: false,
      img: '',
      menu_main: [
        {
          href: '/',
          title: 'Home',
          icon: 'fas fa-home',
        },
        {
          href: '/about',
          title: 'About',
          icon: 'far fa-map',
        },
        {
          href: '/avatar',
          title: 'Avatar',
          icon: 'fas fa-smile',
        },
      ],
      collapsed_main: true,
    };
  },
  methods: {
    ...mapActions(['GET_IMAGE']),
    onItemClick(e, i) {
      console.log(`onItemClick${e}${i}`);
      this.img = this.$store.state.File;
      this.addimage = true;
    },
    onCollapse(c) {
      console.log('onCollapse');
      this.collapsed = c;
    },
  },
  watch: {
    img(newVal, oldVal) {
      console.log('watch', newVal, oldVal);
    },
  },
};
</script>

<style lang="scss">
@import "src/scss/vue-sidebar-menu.scss";
#view {
  padding-left: 350px;
}
#view.collapsed {
  padding-left: 50px;
}

.sidebar.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "FontAwesome",serif;
}
.sidebar.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: "FontAwesome",serif;
}
//.sidebar.v-sidebar-menu .collapse.avatarka:after {
//  height: 200px;
//  width: 200px;
//  border-radius:80px;
//}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main_btn {
  height: 50px;
  width: 50px;
}
.avatarka{
  height: 50px;
  width: 50px;
  border-radius: 20px;
}
</style>
