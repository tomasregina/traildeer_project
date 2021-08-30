<template>
  <div class="custom-container">
    <header-comp :page-data="pageData.header" />
    <full-width-img :page-data="pageData.full_width_img" />
  </div>
</template>
<script>
import HeaderComp from '../../components/HeaderComp';
import FullWidthImg from '../../components/FullWidthImg';
export default {
  props: {
    pageData: Object
  },
  components: {
    HeaderComp,
    FullWidthImg
  }
}
</script>
<style lang="postcss" scoped>

</style>
