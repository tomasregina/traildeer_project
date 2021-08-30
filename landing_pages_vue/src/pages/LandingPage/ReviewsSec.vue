<template>
  <div class="custom-container" >
    <reviews-sec-header :page-data="pageData.reviews_sec_header" />
    <div class="grid-container" :class="reviewType">
      <review v-for="review in pageData.reviews"
      :key="review.id"
      :photo_url="review.photo_url"
      :review_text="review.review_text"
      :author="review.author"
      :author_bio="review.author_bio"
      :social_name="review.social_name"
      :social_link="review.social_link"
      :author_country="review.author_country"
      :review_type="reviewType"
    />
    </div>

  </div>
</template>
<script>
import ReviewsSecHeader from '../../components/ReviewsSecHeader'
import Review from '../../components/Review'
// import landingPageData from '../../assets/landingPageData'

export default {
  props: {
    pageData: Object,
    reviewType: String
  },
  data() {
    return {
      // pageData: landingPageData.reviews_sec
    }
  },
  components: {
    ReviewsSecHeader,
    Review
  }

}
</script>
<style lang="postcss" scoped>
.custom-container {
  margin-bottom: 40px;
  overflow: hidden;
}
.grid-container {
  display: grid;
  grid-template-columns: 430px 430px;
  justify-items: center;
  justify-content: center;
  grid-gap: 43px;
  margin: auto;
}

@media only screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 270px;
    grid-gap: 0px;

  }

}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .grid-container.join {
    grid-template-columns: 490px;
    grid-gap: 45px;
  }
  .grid-container.amb {
    grid-template-columns: 490px;
    grid-gap: 0px;
  }

}
</style>
