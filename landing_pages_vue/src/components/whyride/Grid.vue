<template>
  <div class="flex flex-col items-center">
    <header-comp  :descr="descr" class="" />
    <div class="grid grid-cols-1 px-10 pt-10 pb-10 lg:grid-cols-3 lg:grid-rows-3 gap-14 2xl:gap-24">
      <grid-item
        v-for="item in items"
        :key="item.id"
        :icon_src="item.icon_src"
        :title="item.title"
        :descr="item.descr"
      ></grid-item>
    </div>
  </div>
</template>
<script>
import HeaderComp from "./HeaderComp";
import GridItem from "./GridItem";
export default {
  props: {
    title: String,
    descr: String,
    items: Array
  },
  components: {
    HeaderComp,
    GridItem
  }
};
</script>
