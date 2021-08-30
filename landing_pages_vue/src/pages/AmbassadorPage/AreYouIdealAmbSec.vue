<template>
  <div class="custom-container">
    <cta-comp :page-data="pageData.simple_cta" />
    <full-width-img :page-data="pageData.full_width_img" />
  </div>
</template>
<script>
import CtaComp from '../../components/CtaComp';
import FullWidthImg from '../../components/FullWidthImg';
export default {
  props: {
    pageData: Object
  },
  components: {
    CtaComp,
    FullWidthImg
  }
}
</script>
