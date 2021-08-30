<template>
  <div class="custom-container">
    <ol class="">
      <li v-for="(faq) in pageData.faq_sec_faqs"
          :key="faq.id"
      >
        <span class="ques">{{ faq.ques }}</span>
        <p class="answ">{{ faq.answ }}</p>
      </li>
    </ol>
  </div>

</template>
<script>
export default {
  props: {
    pageData: Array
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
  justify-content: center;
}
ol {
  counter-reset: item;
}
ol > li {
  counter-increment: item;
  list-style-type: none;
}
ol > li::before {
  content: counter(item) ". ";
  font-weight: 900;
}
.ques {
  font-size: 1.375rem;
}
.answ {
  color: rgba(120, 120, 120)
}
@media only screen and (max-width: 768px) {
  ol {
    width: 15rem;
  }
  .custom-container {
    text-align: center;
  }

}
</style>
