<template>
  <div class="custom-container">
    <div class="title-container">
      <span>{{ pageData.title }}</span>
    </div>
    <div class="descr-container">
      <span>{{ pageData.descr }}</span>
    </div>
  </div>
</template>
<script>
// import landingPageData from '../assets/landingPageData'
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
      // pageData: landingPageData.reviews_sec.reviews_sec_header
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2.5rem 0 2.5rem 0;
}
.title-container {
  font-size: 2.25rem;
  text-align: center;
}
.descr-container {
  padding-top: 1rem;
  font-size: 1rem;
  text-align: center;
}
@media only screen and (max-width: 768px)  {
  .title-container {
    width: 20.56rem;
  }
  .descr-container {
    width: 23rem;
  }
}
</style>
