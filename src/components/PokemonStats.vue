<template>
  <div class="pokemon__content pokemon__content--stats">
    <h1 class="pokemon__title">Stats</h1>
    <ul v-for="stat in pokemon.stats" :key="stat.value" class="pokemon__list">
      <li class="pokemon__item pokemon__item--stats">Taille : {{ stat.height }} M</li>
      <li class="pokemon__item pokemon__item--stats">Poids : {{ stat.weight }} KG</li>
      <li class="pokemon__item pokemon__item--stats">Attaque : {{ stat.attack }}</li>
      <li class="pokemon__item pokemon__item--stats">Défense : {{ stat.defense }}</li>
      <li class="pokemon__item pokemon__item--stats">Endurence : {{ stat.stamina }}</li>
      <li class="pokemon__item pokemon__item--stats">MAX PC : {{ stat.pc }} PC</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["pokemon"]
};
</script>
