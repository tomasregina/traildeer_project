<template>
  <div class="custom-container">
    <iframe :src="pageData.youtube_link"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</template>
<script>
export default {
  props: {
    pageData: Object
  },
  components: {
  },
  data() {
    return {
      // pageData: landingPageData.media_data
    }
  }
}
</script>
<style lang="postcss" scoped>
  .custom-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  iframe {
    width: 100%;
    height: 500px;
  }
</style>
