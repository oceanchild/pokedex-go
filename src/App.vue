<template>
  <div id="app">
    <Header />
    <main class="main">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
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

.slide {
  &-enter-active {
    transition: all 0.5s ease;
  }

  &-leave-active {
    transition: all ease-out;
  }

  &-enter,
  &-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
}
</style>
