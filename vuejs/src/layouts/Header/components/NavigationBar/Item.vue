<template>
  <div class="navbar-item-container">
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

</style>
