<template>
  <div class="custom-container">
    <div class="img-container">
      <img :src="icon" alt="" class="icon" >
    </div>
    <div class="title-container">
      <span class="title">{{ title }}</span>
    </div>
    <div class="descr-container">
      <span class="descr"> {{ descr }}</span>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    title: String,
    descr: String,
    srcset: String
  }

}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
}
.img-container {
  display: flex;
  justify-content: center;
}
img {
  width: 9.8rem;
}
.title-container {
  margin: 0 0 10px 0;
  flex-shrink: 0;
  white-space: pre;
}
.descr-container {
  display: flex;
  height: 100%;
  align-items:flex-start;
}
.title {
  font-size: 1.8rem;
}
.descr {
  font-size: 0.9rem;
  color: rgb(103, 103, 103)
}
div {
  text-align: center;
}
@media only screen and (max-width: 1024px) {
  .title-container {
    margin: 0px 0 0.7rem 0;
  }
}
</style>
