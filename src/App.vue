<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/layouts/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
