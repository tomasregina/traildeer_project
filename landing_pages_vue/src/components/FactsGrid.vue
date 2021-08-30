<template>
  <div class="custom-container">
    <div class="grid-container">
      <facts-grid-item
        v-for="fact in pageData" :key="fact.id"
        :fact-name="fact.name"
        :fact-value="fact.value"
    >
    </facts-grid-item>
    </div>

  </div>
</template>
<script>
import FactsGridItem from '../components/FactsGridItem';
export default {
  props: {
    pageData: Array
  },
  components: {
    FactsGridItem
  }
}
</script>
<style lang="postcss" scoped>

.grid-container {
  display: grid;
  grid-template-columns: 180px 180px 180px 180px;
  /* width: 800px; */
  grid-gap: 0.8rem;
  margin: auto;
  justify-content: center;
}
@media only screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 230px;
    grid-gap: 0.8rem;

  }
}
</style>
