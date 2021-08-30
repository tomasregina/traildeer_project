<template>
  <div class="home">
    <landing-sec :page-data="pageData" />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingSec from '../pages/LandingPage/LandingSec';
import landingPageData from '../assets/landingPageData';

export default {
  name: 'Home',
  components: {
    LandingSec
  },
  data() {
    return {
      // pageData: landingPageData
    }
  },
  computed: {
    pageData() {
      return landingPageData[this.$route.params.lang]
    }
  }
}
</script>
