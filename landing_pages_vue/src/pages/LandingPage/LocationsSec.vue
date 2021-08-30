<template>
<div class="custom-container">
  <locations-sec-header :page-data="pageData.locations_sec_header" />
  <div class="waterfall-container">
    <vue-flex-waterfall
  col="3"
  col-spacing="12"
  :break-by-container="true"
  :break-at="{ 900: 3, 600: 2, 300:1 }"
  style="align-content: center;"
  >
  <div class="masonry-item" v-for="location in pageData.locations_sec_imgs" :key="location.id">
    <div class="masonry-img-container">
      <img :style="{ height: `${location.height}px`}" :src="location.photo_url" alt="">
      <div class="text-overlay" :style="{position: 'absolute', bottom : '0px', right: '0px', margin: '0 20px 20px 0'}">
      {{ location.location }}
      </div>
    </div>

  </div>
  </vue-flex-waterfall>
  </div>

  <div class="grid-md-screen-container">
    <div class="grid-md-single-item-container" v-for="location in pageData.locations_sec_imgs" :key="location.id">
      <img  :src="location.photo_url" alt="">
      <div class="text-overlay" :style="{position: 'absolute', bottom : '0px', right: '0px', margin: '0 20px 20px 0'}">
      {{ location.location }}
      </div>
    </div>

  </div>

  <div class="single-img-container">
    <img :src="pageData.locations_sec_imgs[0].photo_url" alt="">
  </div>

</div>
</template>
<script>
import LocationsSecHeader from '../../components/LocationsSecHeader';
// import LocationsSecImgs from '../../components/LocationsSecImgs';
import VueFlexWaterfall from 'vue-flex-waterfall';
// import landingPageData from '../../assets/landingPageData'
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
      // masonryData: pageData.locations_sec_imgs,
      screenWidth: screen.width
    }
  },
  components: {
    LocationsSecHeader,
    VueFlexWaterfall
  },
  methods: {
    onWindowsResized(e) {
      /* if (e.target.outerWidth < 768) {
        const narrowMasonry = [];
        narrowMasonry.push(landingPageData.locations_sec.locations_sec_imgs[0]);
        this.masonryData = narrowMasonry;
      }
      else {
        this.masonryData = landingPageData.locations_sec.locations_sec_imgs;
      } */
    }
  },
  created() {
    window.addEventListener('resize', this.onWindowsResized);
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowsResized);
  }

}
</script>
<style lang="postcss" scoped>
.custom-container {
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  margin-bottom: 3rem;
}
.single-img-container {
  display: none;
}
.waterfall-container {
  display: block;
}

img {
  border-radius: 1.4rem;
  margin-bottom: 0.18rem;
}
.masonry-img-container {
  position: relative;
}
.text-overlay {
  color: white;
  font-size: 1.5rem;
}
.grid-md-screen-container {
  display: none


}

.grid-md-screen-container > div {
  overflow: hidden;
  height: 200px;
}
.grid-md-screen-container > div:last-child {
  grid-column: 1/3;
}
.grid-md-screen-container > div>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.grid-md-single-item-container {
  position: relative;
}
@media only screen and (max-width: 768px) {
  .single-img-container {
    display: none;
    width: 15.8rem;
    height: 14.18rem;
    justify-content: center;
    margin: auto;
  }
  .grid-md-screen-container {
    display: none;
  }
  .waterfall-container {
    display: none;
  }
  .single-img-container img {
    width: 100%;
    object-fit: cover;
  }
}
@media only screen and (max-width: 1024px) {
  .waterfall-container {
    display: none;
  }
  .grid-md-screen-container {
  display: grid;
  grid-template-columns: 30% 30%;
  justify-content: center;
  grid-gap: 3px;

}
}
</style>
