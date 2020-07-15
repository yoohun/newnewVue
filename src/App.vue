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