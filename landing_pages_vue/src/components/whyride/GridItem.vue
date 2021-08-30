<template>
  <div class="flex flex-col w-72">
    <div class="w-10 pb-10 mx-auto">
      <img :src="icon_src" alt="">
    </div>
    <div class="font-semibold">{{title}}</div>
    <div class="text-gray-700">{{descr}}</div>
  </div>
</template>
<script>
export default {
  props: {
    icon_src: String,
    title: String,
    descr: String
  }
}
</script>
