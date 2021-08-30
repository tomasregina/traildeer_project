<template>
  <div class="custom-container">
    <top-hero-img :page-data="pageData.top_hero_img" />
  </div>
</template>
<script>
import TopHeroImg from '../../components/TopHeroImg';
export default {
  props: {
    pageData: Object
  },
  components: {
    TopHeroImg
  }
}
</script>
