<template>
  <div class="pokedex">
    <ul class="pokedex__list">
      <li v-for="pokemon in filtrePokemons" :key="pokemon.value" class="pokedex__item">
        <router-link :to="pokemon.id" class="pokedex__link">
          <img :src="getImage(pokemon.id)" :alt="pokemon.name" class="pokedex__image" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import data from "@/data/pokemons.json";

export default {
  data() {
    return {
      pokemons: data
    };
  },
  computed: {
    filtrePokemons() {
      if (!this.$store.state.pokemon) return this.pokemons;
      return this.pokemons.filter(pokemon => {
        return (
          pokemon.name
            .toLowerCase()
            .indexOf(this.$store.state.pokemon.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    getImage(id) {
      return require(`@/assets/images/${id}.png`);
    }
  }
};
</script>

<style lang="scss">
.pokedex {
  &__list {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  &__item {
    width: 100%;
    height: 80px;
    border-radius: 5px;
    box-shadow: 2px 4px 6px rgba(224, 207, 207, 0.5);
  }

  &__link {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    height: 80%;
  }
}
</style>
