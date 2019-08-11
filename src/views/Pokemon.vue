<template>
  <div class="pokemon">
    <div class="pokemon__container pokemon__container--primary">
      <PokemonInfo :pokemon="pokemon" />
    </div>
    <div class="pokemon__container pokemon__container--secondary">
      <PokemonDescription :pokemon="pokemon" />
      <PokemonStats :pokemon="pokemon" />
      <PokemonWeaknesses :pokemon="pokemon" />
      <PokemonAttacks :pokemon="pokemon.attacks.fast" attack="immédiate" />
      <PokemonAttacks :pokemon="pokemon.attacks.charged" attack="chargée" />
      <PokemonEvolutions :pokemon="pokemon" />
    </div>
  </div>
</template>

<script>
import data from "@/data/pokemons.json";
import PokemonInfo from "@/components/PokemonInfo";
import PokemonDescription from "@/components/PokemonDescription";
import PokemonStats from "@/components/PokemonStats";
import PokemonWeaknesses from "@/components/PokemonWeaknesses";
import PokemonAttacks from "@/components/PokemonAttacks";
import PokemonEvolutions from "@/components/PokemonEvolutions";

export default {
  components: {
    PokemonInfo,
    PokemonDescription,
    PokemonStats,
    PokemonWeaknesses,
    PokemonAttacks,
    PokemonEvolutions
  },
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

<style lang="scss">
@import "@/assets/scss/helpers/_mixins.scss";

.pokemon {
  @include breakPoint(laptop) {
    display: flex;
    justify-content: space-between;
  }

  &__container {
    &--primary {
      @include breakPoint(laptop) {
        width: 35%;
      }
    }

    &--secondary {
      @include breakPoint(laptop) {
        width: 55%;
      }
    }
  }

  &__content {
    margin: 60px 0 0 0;
  }

  &__title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    text-align: center;

    @include breakPoint(laptop) {
      text-align: left;
    }
  }

  &__text {
    margin: 20px 0 0 0;
    text-align: center;

    @include breakPoint(laptop) {
      text-align: left;
    }
  }

  &__list {
    margin: 20px 0 0 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    @include breakPoint(laptop) {
      justify-content: flex-start;
    }

    &--attacks {
      @include breakPoint(laptop) {
        justify-content: space-between;
      }
    }
  }
  &__item {
    &--stats {
      border-radius: 30px;
      margin: 0 5px 5px 5px;
      padding: 8px 18px;
      box-shadow: 2px 2px 2px rgba(51, 51, 51, 0.25);

      @include breakPoint(laptop) {
        margin: 0 5px 10px 0;
      }
    }

    &--weaknesses {
      margin: 0 10px;

      @include breakPoint(laptop) {
        margin: 0 10px 0 0;
      }
    }

    &--attacks {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 10px 0;

      @include breakPoint(laptop) {
        width: 45%;
      }
    }
    &--evolutions {
      margin: 0 0 10px 0;

      @include breakPoint(laptop) {
        margin: 0 0 10px 0;
      }
    }
  }

  &__image {
    width: 100px;
  }
}
</style>
