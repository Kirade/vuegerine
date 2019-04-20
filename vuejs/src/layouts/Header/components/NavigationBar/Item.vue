<template>
  <div class="navigation-bar-item-main">
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
.navigation-bar-item-main {
  display: inline;
}
.item-name {
  display: inline;
}
</style>
