<template>
  <div class="custom-container">
    <about :page-data="pageData.about" />
  </div>

</template>
<script>
import About from '../../components/About';
export default {
  props: {
    pageData: Object
  },
  components: {
    About
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
}
</style>
