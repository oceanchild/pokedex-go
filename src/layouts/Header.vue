<template>
  <header class="header">
    <router-link to="/" class="header__link">Pokedex GO</router-link>
  </header>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("scroll", this.scroll);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      const header = document.querySelector(".header");
      if (window.pageYOffset > header.offsetTop) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }
  }
};
</script>


<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background-color: #ffffff;
  z-index: 9;

  &.is-scrolled {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
  }

  &__link {
    font-weight: bold;
  }
}
</style>
