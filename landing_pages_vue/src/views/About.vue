<template>
  <div class="about">
    <about-sec :page-data="pageData" />
  </div>
</template>
<script>
import AboutSec from '../pages/AboutPage/AboutSec';
import abouPageData from '../assets/aboutPageData';
export default {
  components: {
    AboutSec
  },
  data() {
    return {
      // pageData: landingPageData
    }
  },
  computed: {
    pageData() {
      return abouPageData[this.$route.params.lang]
    }
  }
}
</script>
