<template>
  <div class="custom-container">
    <header-comp :page-data="pageData.header" />
    <facts-grid :page-data="pageData.facts_list" />
  </div>
</template>
<script>
import HeaderComp from '../../components/HeaderComp';
import FactsGrid from '../../components/FactsGrid';
export default {
  props: {
    pageData: Object
  },
  components: {
    HeaderComp,
    FactsGrid
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  padding-bottom: 2rem;
}
</style>
