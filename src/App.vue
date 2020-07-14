<template>
  <div id="app">
    <router-view v-if="isReactive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return { reload: this.reload };
  },
  data() {
    return {
      isReactive: true
    };
  },
  reload() {
    this.isReactive = false;
    this.$nextTick(() => {
      this.isReactive = true;
    });
  }
};
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
