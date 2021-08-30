<template>
  <div class="custom-container">
    <bottom-cta :page-data="pageData.bottom_cta" />
  </div>
</template>
<script>
import BottomCta from '../../components/BottomCta';
export default {
  props: {
    pageData: Object
  },
  components: {
    BottomCta
  }
}
</script>
