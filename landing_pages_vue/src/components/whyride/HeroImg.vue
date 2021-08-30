<template>
  <div :class="{'h-auto lg:h-full': !onlyImg}" class="">
    <div class="w-full overflow-hidden" :class="{'h-72 md:h-96': !onlyImg, 'h-96': onlyImg}">
      <img :src="imgSrc" class="object-cover w-full h-full" alt="" />
    </div>
    <divider class="mx-auto" v-if="!onlyImg" />
    <header-comp v-if="!onlyImg" class="py-14"
      :title="title"

    ></header-comp>
  </div>
</template>
<script>
import HeaderComp from "./HeaderComp";
import Divider from '../Divider'
export default {
  props: {
    imgSrc: String,
    title: String,
    descr: String,
    onlyImg: Boolean
  },
  components: {
    HeaderComp,
    Divider
  }
};
</script>
