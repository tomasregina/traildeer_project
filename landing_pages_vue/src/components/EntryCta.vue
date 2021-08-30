<template>
  <div class="custom-container" :style="{backgroundImage: 'url(' + pageData.background_img + ')'}">
    <div class="title-container">
      <span>{{ pageData.title }}</span>
    </div>
    <div class="cta-container">
      <a :href="pageData.btn_redirect" class="cta-btn"><span>{{ pageData.btn_title }}</span></a>
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  height: 20.3rem;
  width: 100%;
  background-position: center center;
  position: relative;
  justify-content: center;
}
.title-container span {
  font-size: 2.2rem;
  color: white;
}
.title-container {
  text-align: center;
}
.cta-btn {
  margin-top: 1.7rem;

}
@media only screen and (max-width: 768px) {
  .custom-container {
    height: 14.625rem;
  }
  .title-container {
    width: 17.5rem
  }
}
</style>
