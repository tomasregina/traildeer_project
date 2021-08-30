<template>
  <div class="custom-container" :style="{backgroundImage: 'url(' + pageData.img_url + ')'}">

  </div>
</template>
<script>
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: block;
  width: 100%;
  height: 18.43rem;
  position: relative;
  background-position: center;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (max-width: 768px) {
  .custom-container {
  }
}
</style>
