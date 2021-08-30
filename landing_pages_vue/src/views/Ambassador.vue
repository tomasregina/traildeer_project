<template>
  <div class="ambassador">
    <ambassador-sec :page-data="pageData" />
  </div>
</template>

<script>
import AmbassadorSec from '../pages/AmbassadorPage/AmbassadorSec';
import ambassadorPageData from '../assets/ambassadorPageData';

export default {
  name: 'Ambassador',
  components: {
    AmbassadorSec
  },
  data() {
    return {
      // pageData: ambassadorPageData
    }
  },
  computed: {
    pageData() {
      return ambassadorPageData[this.$route.params.lang]
    }
  }
}
</script>
