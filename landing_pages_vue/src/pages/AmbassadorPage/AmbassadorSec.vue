<template>
  <div class="custom-container">
    <top-hero-comp :page-data="pageData.top_sec" />
    <divider />
    <who-is-amb-sec :page-data="pageData.who_is_amb_sec"/>
    <divider />
    <reviews-sec :page-data="pageData.reviews_sec" :review-type="'amb'" />
    <divider />
    <what-is-in-for-you-sec :page-data="pageData.what_is_in_for_you" />
    <divider />
    <are-you-ideal-amb-sec :page-data="pageData.are_you_ideal_amb_sec" />
  </div>
</template>
<script>
import TopHeroComp from '../../components/TopHeroComp';
import Divider from '../../components/Divider';
import WhoIsAmbSec from './WhoIsAmbSec';
import WhatIsInForYouSec from './WhatIsInForYouSec';
import AreYouIdealAmbSec from './AreYouIdealAmbSec';
import ReviewsSec from '../LandingPage/ReviewsSec';

export default {
  props: {
    pageData: Object
  },
  components: {
    TopHeroComp,
    Divider,
    WhoIsAmbSec,
    WhatIsInForYouSec,
    AreYouIdealAmbSec,
    ReviewsSec
  }
}
</script>
