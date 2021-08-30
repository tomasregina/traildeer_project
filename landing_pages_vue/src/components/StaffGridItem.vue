<template>
  <div class="custom-container">
    <div class="photo-container">
      <img :src="photo_url" alt="">
    </div>
    <div class="name-container">
      <span>{{name}}</span>
    </div>
    <div class="function-container">
      <span>{{func}}</span>
    </div>
    <div class="jobs-container">
      <span>{{jobs}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    photo_url: String,
    func: String,
    jobs: String
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}
.photo-container {
  margin-bottom: 2rem;

}
.name-container {
  font-size: 2.25rem
}
.function-container, .jobs-container {
  color: #676767;
}
.function-container {
  font-size: 1.25rem;
}
.jobs-container {
  font-size: 0.9rem;
}

img {
  width: 16.8rem;
}

@media only screen and (max-width: 1024px) and (min-width: 768px) {
  img {
  width: 13.2rem;
}
}
</style>
