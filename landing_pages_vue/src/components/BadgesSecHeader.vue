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
import landingPageData from '../assets/landingPageData';
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
      // pageData: landingPageData.badges_sec.badges_sec_header
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

}
.title-container, .descr-container {
  text-align: center;
  max-width: 60vw;
}
.descr-container {
  margin: 2rem 0 2rem 0;
}
.title-container span {
  font-size: 2.3rem;
}
.descr-container span {
  font-size: 1rem;
}

@media only screen and (max-width: 768px) {
  .title-container, .descr-container {
    max-width: 17rem;
  }
  .custom-container {
    margin-top: 3rem;
  }
}

</style>
