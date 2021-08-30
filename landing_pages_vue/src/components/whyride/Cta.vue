<template>
  <div
    class="flex flex-col text-center py-14"
    :class="{ 'bg-gray-100': withBg }"
  >
    <div class="text-lg font-semibold">{{ descr }}</div>
    <div
      class="p-3 mx-auto mt-10 font-semibold bg-yellow-400 rounded-lg w-content"
    >
      <a v-if="!modal_link" target="_blank" :href="btn_link">{{ btn_title }}</a>
      <a v-if="modal_link" class="cursor-pointer " @click="open = !open">{{ btn_title }}</a>
    </div>
    <vue-modaltor
      v-if="modal_link"
      :visible="open"
      :bgOverlay="'rgba(0,0,0,0.4)'"
      :zeroSpace="true"
      @hide="open = false"
    >
      <iframe
        width="540"
        height="900"
        :src="modal_link"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
      ></iframe>
    </vue-modaltor>
  </div>
</template>
<script>
export default {
  props: {
    descr: String,
    btn_title: String,
    btn_link: String,
    withBg: Boolean,
    modal_link: String
  },
  data() {
    return {
      open: false
    };
  }
};
</script>
