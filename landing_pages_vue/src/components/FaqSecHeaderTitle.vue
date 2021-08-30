<template>
  <div class="custom-container">
    <div class="title-container">
      <span>{{ pageData.title }}</span>
    </div>
    <div class="descr-container">
      <span>{{ pageData.descr }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0 2.5rem 0;

}
.title-container {
  text-align: center;
  font-size: 2.25rem;
}
.descr-container {
  text-align: center;
  font-size: 1;
  width: 40rem;
  margin-top: 1.25rem;
}
@media only screen and (max-width: 768px) {
  .title-container, .descr-container {
    width: 20rem;
  }
}
</style>
