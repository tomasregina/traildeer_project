<template>
  <div>
    <header-comp :page-data="pageData.header" />
    <process-sec-steps-big :page-data="pageData.steps" />
  </div>
</template>
<script>
import ProcessSecHeader from '../../components/ProcessSecHeader';
import ProcessSecStepsBig from '../../components/ProcessSecStepsBig';
import HeaderComp from '../../components/HeaderComp';
export default {
  props: {
    pageData: Object
  },
  components: {
    ProcessSecHeader,
    ProcessSecStepsBig,
    HeaderComp
  }

}
</script>
