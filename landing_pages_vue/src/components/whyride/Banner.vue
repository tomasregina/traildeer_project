<template>
  <div class="pt-10 overflow-hidden lg:h-96">
    <div class="mx-auto lg:hidden" >
      <divider />
    </div>

    <div
      v-if="bannerType === 'imgLeft'"
      class="flex flex-col grid-cols-3 grid-rows-1 lg:h-96 lg:grid "
    >
      <div class="overflow-hidden lg:col-span-2">
        <img class="object-cover w-full h-full " :src="imgSrc" alt="" />
      </div>
      <div
        class="flex flex-col pt-4 text-center bg-gray-100 border-yellow-400 lg:border-l-8 lg:col-span-1"
      >
        <div class="pb-4 text-lg font-semibold">{{ title }}</div>
        <div class="px-8 pb-8 mx-auto text-gray-700 xl lg:pb-0 lg:text-justify lg:w-auto">
          {{ descr }}
        </div>
      </div>
    </div>
    <div
      v-if="bannerType === 'imgRight'"
      class="flex flex-col grid-cols-3 grid-rows-1 lg:h-96 lg:grid "
    >
      <div
        class="flex flex-col col-span-1 text-center bg-gray-100 border-yellow-400 lg:border-r-8 pt-14"
      >
        <div class="pb-8 text-lg font-semibold">{{ title }}</div>
        <div class="px-10 pb-8 mx-auto text-gray-700 lg:w-auto lg:pb-0 lg:text-justify">
          {{ descr }}
        </div>
      </div>
      <div class="col-span-2 overflow-hidden">
        <img class="object-cover w-full h-full " :src="imgSrc" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import Divider from '../Divider'
export default {
  props: {
    imgSrc: String,
    title: String,
    descr: String,
    bannerType: String
  },
  components: {
    Divider
  }
};
</script>
