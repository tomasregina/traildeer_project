<template>
  <div class="custom-container">
    <div class="title-container">
      <span class="title">{{ pageData.title }}</span>
    </div>
    <div class="cta-container">
      <a :href="pageData.btn_redirect" class="cta-btn"><span>{{ pageData.btn_title }}</span></a>
    </div>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData'
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
      // pageData: landingPageData.news_sec.news_cta
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0 3.7rem 0;

}
.title {
  font-size: 2.2rem;
}
.title-container {
  text-align: center;
  margin-top: 1.3rem;
}
.cta-btn {
  margin-top: 2.8rem;
}
@media only screen and (max-width: 768px) {
  .title-container {
    width: 18rem;
  }
  .cta-btn {
    margin-top: 2rem;
  }
}
</style>
