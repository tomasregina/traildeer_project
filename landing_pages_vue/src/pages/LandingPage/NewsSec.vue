<template>
  <div class="custom-container">
    <news-cta :page-data="pageData.news_cta" />
  </div>

</template>
<script>
import NewsCta from '../../components/NewsCta';
export default {
  props: {
    pageData: Object
  },
  components: {
    NewsCta
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {

}
</style>
