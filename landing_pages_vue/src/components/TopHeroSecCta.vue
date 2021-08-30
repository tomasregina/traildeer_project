<template>
  <div class="custom-container" :style="{backgroundImage: 'url(' + pageData.background.url + ')'}">
    <div class="central-container">
      <div v-if="pageData.logo" class="logo-container">
        <div class="img-container">
          <img :srcset="pageData.logo.src_set" alt="">
        </div>
      </div>
      <div v-if="pageData.text_content" class="text-container">
        <div v-if="pageData.text_content.title" class="title-container">
          <span class="title">{{ pageData.text_content.title }}</span>
        </div>
        <div v-if="pageData.text_content.subtitle" class="subtitle-container">
          <span class="subtitle">{{ pageData.text_content.subtitle }}</span>
        </div>
      </div>
      <div v-if="pageData.cta_btn" class="cta-container">
        <a :href="pageData.cta_btn.btn_redirect" class="cta-btn"><span>{{ pageData.cta_btn.btn_title }}</span></a>
      </div>
    </div>

  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData';
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
      // pageData: landingPageData.landing_sec
    }
  },
  mounted() {
  }
}
</script>

<style lang="postcss" scoped>

.custom-container {
  display: flex;
  flex-direction: column;
  background-position: center top;
  background-size: cover;
  height: 47rem;
  align-items: center;
  width: 100%;
}
.central-container {
  /* max-width: 60vw;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}

.logo-container, .text-container, .cta-container {
  display: flex;
  flex-direction: column;
}
.logo-container {
  flex: 3;
}

.img-container {
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
}
img {
  /* width: 32%; */
}

.text-container {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
  border-radius: 5rem;
  width: 40rem;
  /*font-family: 'Sofia Pro';*/
}
.cta-container {
  display: flex;
  flex: 1;
  justify-content: center;
}
.title {
  font-size: 3.5rem;
  color: white;
}
.subtitle {
  font-size: 1.8rem;
  color: white;
}
.cta-btn {
  margin-bottom: 3rem;
}

@media only screen and (max-width: 768px) {
  .custom-container {
    height: 27rem;
  }
  .text-container {
    border-radius: 0.8rem;
    width: 18rem;
  }
  .title {
    font-size: 1.5rem;
  }
  .subtitle {
    font-size: 1rem;
  }

  .cta-container {
    position: relative;
    bottom: 2rem;
  }
  .cta-btn {
    margin-bottom: 0;
    margin-top: 1rem;
  }
  img {
    width: 10rem;
  }
}
</style>
