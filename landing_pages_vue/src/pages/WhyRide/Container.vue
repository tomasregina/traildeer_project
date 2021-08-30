<template>
  <div>
    <hero-img :only-img="false" :img-src="pageData.top_hero.img_src" :title="pageData.top_hero.title" :descr="pageData.top_hero.descr" />
  <grid  :descr="pageData.grid.descr" :items="pageData.grid.items"></grid>
   <banner
      :img-src="pageData.banner1.img_src"
      :bannerType="'imgLeft'"
      :title="pageData.banner1.title"
      :descr="pageData.banner1.descr"
    />
    <cta
      :descr="pageData.cta.descr"
      :btn_link="pageData.cta.btn_link"
      :btn_title="pageData.cta.btn_title"
      :with-bg="false"
    />
     <banner
      :img-src="pageData.banner2.img_src"
      :bannerType="'imgRight'"
      :title="pageData.banner2.title"
      :descr="pageData.banner2.descr"
    />
    <!-- <grid :title="pageData.grid.title" :descr="pageData.grid.descr" :items="pageData.grid.items"></grid> -->
    <cta
      :descr="pageData.bottom_cta.descr"
      :btn_title="pageData.bottom_cta.btn_title"
      :with-bg="true"
      :modal_link="pageData.bottom_cta.modal_link"
    />
    <hero-img :img-src="pageData.bottom_hero.img_src" :only-img="true" />
  </div>
</template>
<script>
import HeroImg from "../../components/whyride/HeroImg";
import HeaderComp from "../../components/whyride/HeaderComp";
import Banner from "../../components/whyride/Banner";
import Cta from "../../components/whyride/Cta";
import Grid from "../../components/whyride/Grid";
import GridItem from "../../components/whyride/GridItem";
export default {
  props: {
    pageData: Object
  },
  components: {
    HeroImg,
    HeaderComp,
    Banner,
    Cta,
    Grid,
    GridItem
  }
};
</script>
