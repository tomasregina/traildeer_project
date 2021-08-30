<template>
  <div class="why-ride">
    <Container :page-data="pageData" />
  </div>
</template>

<script>
import Container from '../pages/WhyRide/Container';
import whyRidePageData from '../assets/whyRidePageData';

export default {
  name: 'WhyRide',
  components: {
    Container
  },
  data() {
    return {
      // pageData: ambassadorPageData
    }
  },
  computed: {
    pageData() {
      return whyRidePageData[this.$route.params.lang]
    }
  }
}
</script>
