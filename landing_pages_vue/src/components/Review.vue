<template>
  <div class="flex flex-col items-center md:grid md:grid-cols-5 custom-container"  :class="review_type">
    <div class="w-40 h-40 col-span-2 overflow-hidden rounded-full photo-container ">
      <img class="object-cover" :src="photo_url" alt="" />
    </div>
    <div v-if="review_type === 'join'" class="grid col-span-3 grid-rows-2 text-container" >
      <div class="review-text-container">
        <span>{{ review_text }}</span>
      </div>
      <div class=" author-info-container">
        <span class="name">{{ author }}</span>
        <span v-if="author_bio" class="bio">{{ author_bio }}</span>
        <span v-if="author_country" class="country">{{ author_country }}</span>
        <a target="_blank" v-if="social_name" :href="social_link" class="bio">{{
          social_name
        }}</a>
      </div>
    </div>
    <div v-if="review_type === 'amb'" class="flex flex-col col-span-3 lg:grid lg:grid-rows-2 text-container">
      <div class="author-info-container">
        <span class="name">{{ author }}</span>
        <span v-if="author_bio" class="bio">{{ author_bio }}</span>
        <span v-if="author_country" class="country">{{ author_country }}</span>
      </div>
      <div class="review-text-container">
        <span>{{ review_text }}</span>
      </div>
      <a target="_blank" v-if="social_name" :href="social_link" class="bio">{{
        social_name
      }}</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    photo_url: String,
    review_text: String,
    author: String,
    author_bio: String,
    social_name: String,
    social_link: String,
    author_country: String,
    review_type: String
  },
  data() {
    return {};
  }
};
</script>
<style lang="postcss" scoped>
.custom-container {

}
/* .custom-container.amb {
  width: 70%;
} */
/* .custom-container:last-child {
  margin-bottom: 30px;
} */
/* img {
  border-radius: 4rem;
  width: 7.6rem;
} */
.amb .name {
  font-size: 20px;
}

.photo-container {
}
.text-container {
  margin-left: 1.3rem;
}
.join .review-text-container {
  font-style: italic;

  color: rgb(57, 57, 57);
}
.review-text-container {
  font-size: 0.87rem;
}

.author-info-container {

  display: flex;
  flex-direction: column;
  gap: 6px;
}
/* .amb .author-info-container {
  margin-top: 1.25rem;
} */
.join .bio {
  color: #7a7979;
}
/* .amb .country {
  padding-bottom: 4px;
}
.amb .review-text-container {
  padding-bottom: 6px;
} */
a {
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
  .custom-container {
    flex-direction: column;
  }
  .text-container {
    margin-top: 1.25rem;
  }

  .text-container .author-info-container {
    margin-top: 0rem;
  }
}
</style>
