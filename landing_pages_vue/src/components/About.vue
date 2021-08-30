<template>
  <div class="custom-container" :style="{backgroundImage: 'url(' + pageData.backgroung_img + ')'}">
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
      // pageData: landingPageData.about_sec.about
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  background-size: cover;
  width: 100%;
  height: 42rem;
  flex-direction: column;
  align-items: center;
  background-position: center center;
}
.title-container {
  font-size: 2.35rem;
  text-align: center;
  margin-top: 3.5rem;
}
.descr-container {
  width: 43rem;
  text-align: center;
  margin-top: 1.2rem;
}
@media only screen and (max-width: 768px) {
  .custom-container {
    height: 45rem;
    padding-top: 2rem;
  }
  .title-container {
  width: 20rem;
  margin-top: 0.8rem;
}
  .descr-container {
    width: 15.6rem;
  }
}

</style>
