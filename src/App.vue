<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view />
    </main>
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
