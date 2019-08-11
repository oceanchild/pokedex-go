<template>
  <div class="info">
    <p class="info__id">{{ pokemon.id }}</p>
    <img :src="getImage(pokemon.id)" :alt="pokemon.name" class="info__image" />
    <h1 class="info__name">{{ pokemon.name }}</h1>
    <p class="info__family">Pokémon {{ pokemon.family }}</p>
    <ul class="info__list">
      <li v-for="type in pokemon.types" :key="type.value" class="info__item">
        <img :src="getType(type)" :alt="type" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
  methods: {
    getImage(id) {
      return require(`@/assets/images/${id}.png`);
    },
    getType(id) {
      return require(`@/assets/images/${id}.svg`);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/helpers/_mixins.scss";

.info {
  @include breakPoint(laptop) {
    position: sticky;
    top: 100px;
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__id {
    text-align: right;
  }

  &__image {
    margin: 40px auto 0 auto;
    width: 250px;
    height: 250px;
    object-fit: contain;
  }

  &__name {
    margin: 20px 0 0 0;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-size: 22px;
  }

  &__family {
    margin: 10px 0 0 0;
    text-align: center;
  }

  &__list {
    margin: 20px 0 0 0;
    display: flex;
    justify-content: center;
  }

  &__item {
    margin: 0 10px;
  }
}
</style>
