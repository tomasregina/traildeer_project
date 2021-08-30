<template>
  <div class="custom-container">
    <div class="title-container">
      <span>{{ pageData.header }}</span>
    </div>
    <div class="descr-container">
      <span>{{ pageData.descr }}</span>
    </div>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData.json'
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
      // pageData: landingPageData.media_data
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
.title-container, .descr-container {
  text-align: center;
  max-width: 60vw;
}
.title-container span {
  font-size: 2.3rem;
}
.descr-container span {
  font-size: 1rem;
}
.descr-container {
  margin: 2rem 0 2rem 0;
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
