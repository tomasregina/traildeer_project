<template>
  <div id="app" class="font-sofia">
    <!-- <landing-sec /> -->
    <div id="nav" class="">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
// import LandingSec from './pages/LandingPage/LandingSec'
export default {
  components: {
    // LandingSec
  }
}
</script>

<style>

#nav {
  display: none;
}
@font-face {
  font-family: 'Droid Sans';
  src: local('Droid Sans'),
    url(./fonts/DroidSans/DroidSans.ttf) format('truetype');
}
@font-face {
  font-family: 'Open Sans';
  src: local('Open Sans'),
    url(./fonts/OpenSans/OpenSans-Regular.ttf) format('truetype')
}
@font-face {
  font-family: 'Sofia Pro';
  src: local('Sofia Pro'),
    url(./fonts/Sofia/SofiaProRegularAz.otf) format('opentype')
}
@font-face {
  font-family: 'Poppins';
  src: local('Poppins'),
    url(./fonts/Poppins/Poppins-Regular.ttf) format('truetype')
}
body {
  margin: 0;
  /*font-family: 'Sofia Pro';*/
  }
.descr-container {
  color:rgb(120, 120, 120)
}
.cta-btn {
  /*font-family: 'Sofia Pro';*/
  color: black;
  background: rgba(255,211,3,1);
  border-radius: 3rem;
  border: none;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14rem;
  height: 3.25rem;
  text-decoration: none;
}
.cta-btn:hover {
  background-color: rgba(242,193,2,1);
  cursor: pointer;
}
.title-container {
  font-size: 2.25rem;
  text-align: center;
}
</style>
