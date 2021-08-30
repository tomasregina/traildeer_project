<template>
  <div class="custom-container">
    <process-sec :page-data="pageData.process_sec" />
    <cta-sec :page-data="pageData.simple_cta" />
    <full-width-img :page-data="pageData.full_width_img" />
  </div>
</template>
<script>
import ProcessSec from './ProcessSec';
import CtaSec from './CtaSec';
import FullWidthImg from '../../components/FullWidthImg';
export default {
  props: {
    pageData: Object
  },
  components: {
    ProcessSec,
    CtaSec,
    FullWidthImg
  }
}
</script>
<style scoped>
.custom-container {
  overflow: hidden;
}
</style>
