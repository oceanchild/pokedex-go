<template>
  <div class="pokemon__content pokemon__content--description">
    <h1 class="pokemon__title">Description</h1>
    <div class="pokemon__text">{{ pokemon.description }}</div>
  </div>
</template>

<script>
export default {
  props: ["pokemon"]
};
</script>
