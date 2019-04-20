<template>
  <div class="link-container">
    <router-link :to="to">
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.link-container {
  display: inline;
}

</style>
