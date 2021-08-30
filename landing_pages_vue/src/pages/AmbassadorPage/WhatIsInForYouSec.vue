<template>
  <div class="custom-container">
    <badges-sec :page-data="pageData.badges_sec" />
    <cta-comp :page-data="pageData.simple_cta" />
    <full-width-img :page-data="pageData.full_width_img" />
  </div>
</template>
<script>
import CtaComp from '../../components/CtaComp';
import BadgesSec from './BadgesSec';
import FullWidthImg from '../../components/FullWidthImg';
export default {
  props: {
    pageData: Object
  },
  components: {
    CtaComp,
    BadgesSec,
    FullWidthImg
  }
}
</script>
<style scoped>
  .custom-container {
    overflow: hidden;
  }
</style>
