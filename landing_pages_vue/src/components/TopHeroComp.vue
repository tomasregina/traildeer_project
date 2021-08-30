<template>
  <div
    class="custom-container"
    :class="$route.name.toLowerCase()"
    :style="{ backgroundImage: 'url(' + pageData.background.url + ')' }"
  >
    <div class="central-container">
      <div v-if="pageData.logo" class="logo-container">
        <div class="img-container">
          <img :src="pageData.logo.url" alt="" />
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
        <a :href="pageData.cta_btn.btn_redirect" class="cta-btn"
          ><span>{{ pageData.cta_btn.btn_title }}</span></a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageData: Object
  },
  data() {
    return {};
  },
  mounted() {}
};
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
  position: relative;
}

.logo-container,
.text-container,
.cta-container {
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
  width: 40%;
}

.text-container {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5rem;
  width: -webkit-fill-available;
  /* width: 40rem; */
  /*font-family: 'Sofia Pro';*/
  padding: 2px;
}
.cta-container {
  display: flex;
  flex: 1;
  justify-content: center;
}
.title {
  font-size: 2.5rem;
  color: white;
}
.subtitle {
  font-size: 1.8rem;
  color: white;
}
.cta-btn {
  margin-bottom: 3rem;
  text-align: center;
}
.custom-container .about {
  height: 38.7rem;
}
.custom-container .about .img-container {
  margin-top: 6rem;
}
.custom-container .about .img-container img {
  width: 70%;
}
.custom-container .ambassador .text-container .title {
  font-size: 2.5rem;
}
.custom-container .ambassador .text-container {
  flex: 0.5;
  margin-bottom: 4rem;
}
@media only screen and (max-width: 768px) {
  .custom-container {
    height: 27rem;
  }
  .text-container {
    border-radius: 0.8rem;
    /* width: 18rem; */
    width: -webkit-fill-available;
    text-align: center;
    margin-top: 1rem;
  }
  .subtitle-container {
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1.3rem;
  }
  .subtitle {
    font-size: 1rem;
  }

  .cta-container {
    position: relative;
    padding: 3px;
    bottom: 2rem;
  }
  .cta-btn {
    margin-bottom: 0;
    margin-top: 1rem;
  }
  img {
    width: 10rem;
  }
  .custom-container .about {
    height: 25rem;
  }
  /*   .custom-container .about .img-container img {
    width: 60%
  } */
}
</style>
