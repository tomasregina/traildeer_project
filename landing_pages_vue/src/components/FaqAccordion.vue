<template>
  <div class="custom-container">
    <vsa-list>
  <vsa-item v-for="faq in pageData.faq_sec_faqs"
    :key="faq.id">
    <vsa-heading>
      {{ faq.ques }}
    </vsa-heading>

    <vsa-content>
      {{ faq.answ }}
    </vsa-content>
  </vsa-item>
</vsa-list>
  </div>
</template>
<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
export default {
  props: {
    pageData: Object
  },
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent
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
  margin-bottom: 5rem;
}
  .vsa-list {
    color: rgb(120, 120, 120);

    }
    .vsa-heading {
      border-radius: 10px;
    }

  .vsa-list {
    --vsa-text-color: black;
    --vsa-highlight-color:rgba(255,211,3,0.8);
    --vsa-default-icon-size: 0.5;
    border-radius: 2rem;
    overflow: hidden;
  }
  @media only screen and (max-width: 768px) {
  .custom-container {
    padding: 10px;

  }
  }
</style>
