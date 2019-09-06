<template>
  <header class="header">
    <router-link to="/" class="header__link">Pokédex GO</router-link>
    <div class="header__search">
      <input
        type="text"
        id="search"
        placeholder="Bulbizarre"
        v-model="pokemon"
        @input="filtrePokemon"
        class="header__input"
      />
      <label for="search" class="header__label">
        <img src="@/assets/images/search.svg" alt class="header__icon" />
      </label>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      pokemon: null
    };
  },
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
    },
    filtrePokemon() {
      this.$store.state.pokemon = this.pokemon;
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

  &__search {
    display: flex;
    align-items: center;
    padding: 6px 10px;
    background-color: #eeeeee;
    border-radius: 30px;
  }

  &__input {
    padding: 0 5px;
    border: none;
    outline: none;
    background-color: #eeeeee;
  }

  &__icon {
    height: 20px;
  }
}
</style>
