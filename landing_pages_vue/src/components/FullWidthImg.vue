<template>
  <div class="custom-container" :style="{backgroundImage: 'url(' + pageData.url + ')'}">
  </div>
</template>
<script>
export default {
  props: {
    pageData: Object
  }
}
</script>
<style lang="postcss" scoped>
  .custom-container {
    width: 100%;
    height: 32.4rem;
    background-position: center top;
    background-size: cover;
  }
  @media only screen and (max-width: 768px)  {
  .custom-container {
    height: 19rem;
  }
  }
</style>
