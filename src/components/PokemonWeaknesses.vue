<template>
  <div class="pokemon__content pokemon__content--stats">
    <h1 class="pokemon__title">Faiblesses</h1>
    <ul class="pokemon__list">
      <li
        v-for="weaknesse in pokemon.weaknesses"
        :key="weaknesse.value"
        class="pokemon__item pokemon__item--weaknesses"
      >
        <img :src="getImage(weaknesse)" :alt="weaknesse" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
  methods: {
    getImage(id) {
      return require(`@/assets/images/${id}.svg`);
    }
  }
};
</script>
