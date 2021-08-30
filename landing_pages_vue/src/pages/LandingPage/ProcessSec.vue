<template>
  <div class="custom-container">
    <header-comp :page-data="pageData.header" />
    <process-sec-steps :page-data="pageData.steps" />
  </div>
</template>
<script>
import ProcessSecSteps from '../../components/ProcessSecSteps';
import HeaderComp from '../../components/HeaderComp';
export default {
  props: {
    pageData: Object
  },
  components: {
    ProcessSecSteps,
    HeaderComp
  }

}
</script>
<style scoped>
.custom-container {
}
</style>
