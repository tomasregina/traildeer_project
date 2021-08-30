<template>
<div class="">
  <header-comp :page-data="pageData.header" />
  <div class="grid-container">
    <badge v-for="badge in pageData.badges"
        :key="badge.id"
        :icon="badge.icon"
        :title="badge.title"
        :descr="badge.descr"
        :srcset="badge.srcset"
        />
  </div>
</div>
</template>
<script>
import Badge from '../../components/Badge';
import HeaderComp from '../../components/HeaderComp';
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
    }
  },
  components: {
    Badge,
    HeaderComp
  }
}
</script>
<style lang="postcss" scoped>
div {
}
.flex-container {
  display: flex;

}
.grid-container {
  display: grid;
  grid-template-columns: 260px 260px 260px;
  /* width: 800px; */
  grid-gap: 100px;
  margin: auto;
  justify-content: center;
}
@media only screen and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: 230px;
    grid-gap: 50px;

  }
}



</style>
