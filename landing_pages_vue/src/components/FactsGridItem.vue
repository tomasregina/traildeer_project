<template>
  <div class="custom-container">
    <div class="name-container">
      <span>{{factName}}</span>
    </div>
    <div class="value-container">
      <span>{{factValue}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    factName: String,
    factValue: String
  }
}
</script>
<style lang="postcss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  text-align: center;
}
.name-container {
  font-size: 1.125rem;
  padding-bottom: 0.5rem;
}
.value-container {
  font-size: 1.625rem;
  font-weight: bolder;
}
</style>
