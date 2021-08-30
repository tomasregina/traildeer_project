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
import landingPageData from '../assets/landingPageData'
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
      // pageData: landingPageData.locations_sec.locations_sec_header
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-container {
  text-align: center;
  font-size: 2.25rem;
  margin: 2.5rem 0 1.9rem 0
}
.descr-container {
  font-size: 1rem;
  width: 37rem;
  text-align: center;
  margin-bottom: 1.8rem;
}
@media only screen and (max-width: 768px) {
  .descr-container {
    width: 15.6rem
  }
}
</style>
