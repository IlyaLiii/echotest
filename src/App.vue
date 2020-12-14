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
  />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
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
    onItemClick(e, i) {
      console.log(`onItemClick${e}${i}`);
    },
    onCollapse(c) {
      console.log('onCollapse');
      this.collapsed = c;
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
//.sidebar {
//  margin: 0;
//  padding: 0;
//  width: 200px;
//  background-color: #f1f1f1;
//  position: fixed;
//  height: 100%;
//  overflow: auto;
//}
</style>
