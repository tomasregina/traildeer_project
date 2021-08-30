<template>
  <div class="custom-container">
    <header-comp :pageData="pageData.header" />
    <staff-grid :pageData="pageData.staff_list" />
    <full-width-img :pageData="pageData.full_width_img" />
  </div>
</template>
<script>
import HeaderComp from '../../components/HeaderComp';
import StaffGrid from '../../components/StaffGrid';
import FullWidthImg from '../../components/FullWidthImg';
export default {
  props: {
    pageData: Object
  },
  components: {
    HeaderComp,
    StaffGrid,
    FullWidthImg
  }
}
</script>
