<template>
  <div class="custom-container">
    <span class="footer-cpr">{{ pageData.footer.copyright }}</span>
  </div>
</template>
<script>
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
      // pageData: landingPageData.footer_sec
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  justify-content: center;
  font-size: 0.7rem;
  margin: 0.63rem 0 0.63rem 0;

}
</style>
