<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-semibold ">{{title}}</h1>
    <div class="text-center text-gray-700 lg:leading-8 w-96">{{descr}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    descr: String
  }
}
</script>
