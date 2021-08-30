<template>
  <div class="custom-container">
    <footer-comp :page-data="pageData" />
  </div>
</template>
<script>
import FooterComp from '../../components/FooterComp';
export default {
  props: {
    pageData: Object
  },
  components: {
    FooterComp
  }
}
</script>
