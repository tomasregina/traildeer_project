<template>
  <div class="custom-container" :style="{backgroundImage: 'url(' + pageData.background_img + ')'}">
    <div class="logo-container">
      <img :srcset="pageData.logo_srcset" alt="">
    </div>
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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 38.7rem;
  position: relative;
  background-size: cover;
  background-position: center top;
}
.logo-container {
  margin-top: 6rem;
}
img {
  width: 30rem;
  height: 9.1rem
}
@media only screen and (max-width: 768px)  {
  .custom-container {
    height: 25rem;
  }
  img {
    height: auto;
    width: auto;
  }
}
</style>
