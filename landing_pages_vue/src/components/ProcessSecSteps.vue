<template>
  <div class="custom-container">
    <ol class="grid-container">
    <li v-for="(step) in pageData"
      :key="step.id"
    >
      {{ step.text }}
    </li>
    </ol>
  </div>
</template>
<script>
import landingPageData from '../assets/landingPageData';
export default {
  props: {
    pageData: Array
  },
  data() {
    return {
      // pageData: landingPageData.process_sec
    }
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  margin-bottom: 1.8rem
}
.grid-container {
  display: grid;
  grid-template-columns: 23.125rem 23.125rem;
  justify-content: center;
}
li  {
  margin-bottom: 0.43rem;
  font-size: 1.37rem;
  line-height: 2.5rem;
}
ol {
  counter-reset: item;
  /* list-style-position: inside; */
}
ol > li {
  counter-increment: item;
  list-style-type: none;
}
ol > li::before {
  content: counter(item) ".";
  font-weight: 900;
}
@media only screen and (max-width: 768px)  {
  .grid-container {
    grid-template-columns: 18.75rem;
    align-items: center;
    justify-items: center;
  }
  ol {
    text-align: center;
    list-style-position: unset;
  }

}
</style>
