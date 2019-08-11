<template>
  <div class="pokemon__content pokemon__content--evolutions">
    <h1 class="pokemon__title">Évolutions</h1>
    <ul class="pokemon__list">
      <li
        v-for="evolution in pokemon.evolutions"
        :key="evolution.value"
        class="pokemon__item pokemon__item--evolutions"
      >
        <img :src="getImage(evolution.id)" :alt="evolution.name" class="pokemon__image" />
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
    }
  }
};
</script>
