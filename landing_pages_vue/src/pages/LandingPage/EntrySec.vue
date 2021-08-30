<template>
<entry-cta :page-data="pageData.entry_cta" />
</template>
<script>
import EntryCta from '../../components/EntryCta';
export default {
  props: {
    pageData: Object
  },
  components: {
    EntryCta
  }
}
</script>


