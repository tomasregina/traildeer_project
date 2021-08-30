<template>
  <div class="">
    <top-hero-comp :page-data="pageData.top_sec" />
    <divider />
    <badges-sec :page-data="pageData.badges_sec" />
    <news-sec :page-data="pageData.news_sec" />
    <about-sec :page-data="pageData.about_sec" />
    <divider />
    <reviews-sec :page-data="pageData.reviews_sec" :review-type="'join'" />
    <divider />
    <locations-sec :page-data="pageData.locations_sec" />
    <entry-sec :page-data="pageData.entry_sec" />
    <divider />
    <process-sec :page-data="pageData.process_sec" />
    <faq-sec :page-data="pageData.faq_sec" />
<!--     <media-sec :page-data="pageData.media_data" /> -->
    <divider />
    <bottom-entry-sec :page-data="pageData.bottom_entry_sec" />
    <footer-sec :page-data="pageData.footer_sec" />
    <social-bar :page-data="pageData.social_links"/>

  </div>
</template>
<script>
// sections import
import BadgesSec from './BadgesSec';
import NewsSec from './NewsSec';
import AboutSec from './AboutSec';
import ReviewsSec from './ReviewsSec';
import LocationsSec from './LocationsSec';
import EntrySec from './EntrySec';
import ProcessSec from './ProcessSec';
import FaqSec from './FaqSec';
import BottomEntrySec from './BottomEntrySec';
import FooterSec from './FooterSec';
// components import
import TopHeroComp from '../../components/TopHeroComp';
import Divider from '../../components/Divider';
import SocialBar from '../../components/SocialBar';
import MediaSec from './MediaSec';
export default {
  props: {
    pageData: Object
  },
  components: {
    TopHeroComp,
    BadgesSec,
    NewsSec,
    AboutSec,
    ReviewsSec,
    LocationsSec,
    EntrySec,
    ProcessSec,
    FaqSec,
    BottomEntrySec,
    FooterSec,
    Divider,
    SocialBar,
    MediaSec
  }
}
</script>

<style lang="postcss">
.central-container {
  max-width: 60vw;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
