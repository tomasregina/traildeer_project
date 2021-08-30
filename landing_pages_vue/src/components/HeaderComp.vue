<template>
  <div class="custom-container">
    <div class="title-container">
      <span>{{ pageData.title }}</span>
    </div>
    <div v-if="pageData.descr" class="descr-container">
      <span>{{ pageData.descr }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageData: Object
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

}
.title-container, .descr-container {
  text-align: justify;
  text-align-last: center;
  max-width: 55vw;
  line-height: 1.7rem;
}
.title-container {
  text-align: center;
}
.nobr { white-space:nowrap; }
.descr-container {
  margin: 2rem 0 2rem 0;
}
.title-container span {
  font-size: 2.3rem;
}
.descr-container span {
  font-size: 1rem;
}

@media only screen and (max-width: 768px) {
  .title-container, .descr-container {
    max-width: 17rem;
    text-align: center;
  }
  .title-container {
    line-height: 2.5rem;
  }
  .custom-container {
    margin-top: 3rem;
  }
}
</style>
