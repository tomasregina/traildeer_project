<template>
  <div class="custom-container">
    <div class="icon-bar">
      <a :href="pageData.fb" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a>
      <a :href="pageData.ig" target="_blank" class="instagram"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageData: Object
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="postcss" scoped>
.icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}
.icon-bar a:hover {
  background-color: rgba(255,211,3);
  background-image: -moz-none;
    background-image: -webkit-none;
    background-image: -webkit-none;
    background-image: -o-none;
    background-image:none;
}
.facebook {
  background: #3B5998;
  color: white;
}
.instagram {
  color: red;
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
</style>
