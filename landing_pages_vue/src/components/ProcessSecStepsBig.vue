<template>
  <div class="custom-container">
    <ol class="grid-container">
    <li v-for="(step) in pageData"
      :key="step.id"
    >
    <div class="row-container">
      <div class="order-container">
        <span>{{step.order + '.'}}</span>
      </div>
      <div class="text-container">
        <span>{{step.text}}</span>
      </div>
    </div>
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
  grid-gap: 1rem;
}
li  {
  margin-bottom: 0.43rem;
  font-size: 1.37rem;
  line-height: 2.5rem;
}
ol {
  list-style: none;
}
.row-container {
  display: flex;
  align-items: center;
}
.text-container {
  font-size: 0.9rem;
  line-height: 1rem;
  margin: 0rem 1rem 0rem 1rem;
}
.order-container {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  font-size: 3rem;
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
