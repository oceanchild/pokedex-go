<template>
  <div class="pokemon__content pokemon__content--attack">
    <h1 class="pokemon__title">Attaque {{ attack }}</h1>
    <ul class="pokemon__list pokemon__list--attacks">
      <li
        v-for="attack in pokemon"
        :key="attack.value"
        class="pokemon__item pokemon__item--attacks"
      >
        <img :src="getImage(attack.type)" :alt="attack.type" />
        <span>{{ attack.name }}</span>
        <span>{{ attack.damage }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["pokemon", "attack"],
  methods: {
    getImage(id) {
      return require(`@/assets/images/${id}.svg`);
    }
  }
};
</script>
