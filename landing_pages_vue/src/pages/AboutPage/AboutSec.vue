<template>
  <div class="custom-container">
    <top-hero-comp :page-data="pageData.top_sec" />
    <divider />
    <what-we-do-sec :page-data="pageData.what_we_do_sec" />
    <divider />
    <staff-sec :page-data="pageData.staff_sec" />
    <divider />
    <facts-sec :page-data="pageData.facts_sec" />
    <bottom-entry-sec :page-data="pageData.bottom_sec" />
  </div>
</template>
<script>
import WhatWeDoSec from './WhatWeDoSec';
import StaffSec from './StaffSec';
import FactsSec from './FactsSec';
import TopHeroComp from '../../components/TopHeroComp';
import Divider from '../../components/Divider.vue';
import BottomEntrySec from '../LandingPage/BottomEntrySec.vue';
export default {
  props: {
    pageData: Object
  },
  components: {
    WhatWeDoSec,
    StaffSec,
    FactsSec,
    Divider,
    BottomEntrySec,
    TopHeroComp
  }
}
</script>
