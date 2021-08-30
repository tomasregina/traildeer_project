<template>
  <div class="custom-container">
    <div class="central-container">
      <div class="divide-line"></div>
    </div>

  </div>
</template>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  justify-content: center;
}
.divide-line {
  background: rgba(255,211,3,1);
  width: 456px;
  height: 11px;
}

@media only screen and (max-width: 768px) {
  .divide-line {
    width: 280px;
  }
}
</style>
