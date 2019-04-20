<template>
  <div class="item-container">
    <p class="item-name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.item-container {
  display: inline;
}
.item-name {
  display: inline;
}
</style>
