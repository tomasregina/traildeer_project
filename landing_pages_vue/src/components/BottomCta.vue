<template>
  <div class="custom-container" :style="{backgroundImage: 'url(' + pageData.background_img + ')'}">
    <div v-if="pageData.title" class="title-container">
      <span>{{pageData.title }}</span>
    </div>
    <div class="cta-container">
      <a v-if="!pageData.with_modal" :href="pageData.btn_redirect" class="cta-btn"><span>{{ pageData.btn_title }}</span></a>
      <a v-if="pageData.with_modal" @click="open = !open" class="cta-btn"><span>{{ pageData.btn_title }}</span></a>
    </div>
  <vue-modaltor
    v-if="pageData.with_modal"
    :visible="open"
    :bgOverlay="'rgba(0,0,0,0.4)'"
    :zeroSpace="true"
    @hide="open = false"
    >

      <iframe width="540" height="900" :src="pageData.iframe_link" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>



  </vue-modaltor>
  </div>
</template>
<script>
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
      isShow: false,
      open: false
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 16.7rem;
  position: relative;
  background-position: center top;
  background-size: cover;
}
.cta-btn {
  margin-bottom: 1.8rem;
  text-align: center
}
.title-container span {
  font-size: 2.25rem;
  color: white;
}
.title-container {
  display: flex;
  height: 5.7rem;
  width: 31.5rem;
  background: rgba(0,0,0,0.5);
  border-radius: 9rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1.87rem;
}

@media only screen and (max-width: 768px) {
  .title-container {
    width: 10%;
  }
}

</style>
