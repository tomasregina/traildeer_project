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
      // pageData: landingPageData.process_sec.process_sec_header
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

.title-container span {
  font-size: 2.25rem;
}
.descr-container span {
  font-size: 1rem;
}
.title-container {
  align-items: center;
  margin-top: 1.8rem;
}
.descr-container {
  width: 33rem;
  text-align: center;
  margin-top: 1.25rem;
}
@media only screen and (max-width: 768px) {
  .title-container {
    width: 18.7rem;
    text-align: center;
  }
  .descr-container {
    width: 12.5rem;
  }
}
</style>
