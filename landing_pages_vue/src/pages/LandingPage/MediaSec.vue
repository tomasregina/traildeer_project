<template>
  <div class="custom-container">
    <media-header :page-data="pageData" />
    <video-banner :page-data="pageData" />
  </div>
</template>
<script>
import VideoBanner from '../../components/VideoBanner';
import MediaHeader from '../../components/MediaHeader';

export default {
  props: {
    pageData: Object
  },
  data() {
    return {

    }
  },
  components: {
    VideoBanner,
    MediaHeader
  }
}
</script>
<style lang="postcss" scoped>

</style>
