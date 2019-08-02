<template>
  <div class="pokemon">{{pokemon.name}}</div>
</template>

<script>
import data from "@/data/pokemons.json";

export default {
  data() {
    return {
      pokemon: data.find(pokemon => pokemon.id === this.$route.params.id)
    };
  },
  computed: {
    getPokemon() {
      return this.pokemon;
    }
  }
};
</script>
