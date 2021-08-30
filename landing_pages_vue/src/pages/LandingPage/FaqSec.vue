<template>
  <div class="custom-container">
    <faq-sec-header-img :page-data="pageData.faq_sec_header_img" />
    <divider />
    <faq-sec-header-title :page-data="pageData.faq_sec_header_text" />
    <faq-sec-faqs :page-data="pageData.faq_sec_faqs" />
    <faq-accordion :page-data="pageData" />
  </div>
</template>
<script>
import FaqSecHeaderImg from '../../components/FaqSecHeaderImg';
import FaqSecHeaderTitle from '../../components/FaqSecHeaderTitle';
import FaqSecFaqs from '../../components/FaqSecFaqs';
import Divider from '../../components/Divider';
import FaqAccordion from '../../components/FaqAccordion'
export default {
  props: {
    pageData: Object
  },
  components: {
    FaqSecHeaderImg,
    FaqSecHeaderTitle,
    FaqSecFaqs,
    Divider,
    FaqAccordion
  }
}
</script>
