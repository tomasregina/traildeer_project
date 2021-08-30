<template>
  <div class="custom-container">
    <cta-comp :page-data="pageData" />
  </div>
</template>
<script>
import CtaComp from '../../components/CtaComp';
export default {
  props: {
    pageData: Object
  },
  components: {
    CtaComp
  }
}
</script>
