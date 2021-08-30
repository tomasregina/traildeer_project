<template>
  <div class="custom-container">
    <div class="grid-container">
       <staff-grid-item
        v-for="person in pageData"
        :key="person.id"
        :name="person.name"
        :photo-url="person.photo_url"
        :func="person.function"
        :jobs="person.jobs"
        :photo_url="person.photo_url"
    >
    </staff-grid-item>
    </div>
  </div>
</template>
<script>
import StaffGridItem from '../components/StaffGridItem';
export default {
  props: {
    pageData: Array
  },
  components: {
    StaffGridItem
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  margin-bottom: 2rem;
}
.flex-container {
  display: flex;

}
.grid-container {
  display: grid;
  grid-template-columns: 260px 260px 260px;
  /* width: 800px; */
  grid-gap: 2.8rem;
  margin: auto;
  justify-content: center;
}
@media only screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 230px;
    grid-gap: 50px;

  }
}
@media only screen and (max-width: 1024px) {
  .grid-container {
    grid-gap: 0px;
  }
}
</style>
