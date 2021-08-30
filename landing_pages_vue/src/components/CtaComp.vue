<template>
  <div class="custom-container" :style="{backgroundImage: 'url(' + (pageData.background_img || '') + ')'}">
    <div class="title-container">
      <span class="title">{{ pageData.text_content.title }}</span>
    </div>
    <div v-if="pageData.text_content.descr" class="descr-container">
      <span class="descr">{{pageData.text_content.descr}}</span>
    </div>
    <div class="cta-container">
      <a v-if="!pageData.modal" :href="pageData.cta_btn.btn_redirect" class="cta-btn"><span>{{ pageData.cta_btn.btn_title }}</span></a>
      <a v-if="pageData.modal" @click="open = !open" class="cta-btn"><span>{{ pageData.cta_btn.btn_title }}</span></a>
    </div>
    <vue-modaltor
        v-if="pageData.modal"
        :visible="open"
        :bgOverlay="'rgba(0,0,0,0.4)'"
        :zeroSpace="true"
        @hide="open = false"

      >
       <iframe width="540" height="900" :src="pageData.modal.iframe_link" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>

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
  margin: 1.5rem 0 3.7rem 0;

}
.title {
  font-size: 1.5rem;
}
.title-container {
  text-align: center;
  margin-top: 1.3rem;
  padding-bottom: 1.2rem;
}
.cta-btn {
  margin-top: 2.8rem;
}
.descr-container {
  display: flex;
  width: 30rem;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .title-container {
    width: 18rem;
    text-align: center;
  }
  .cta-btn {
    margin-top: 2rem;
  }
  .descr-container {
    width: 20rem;
  }
}
</style>
