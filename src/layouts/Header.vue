<template>
  <header class="header">
    <router-link to="/" class="header__link">Pokedex GO</router-link>
  </header>
</template>

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
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);

  &__link {
    font-weight: bold;
  }
}
</style>
