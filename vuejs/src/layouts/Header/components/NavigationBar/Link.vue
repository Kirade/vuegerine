<template>
  <div class="navigation-bar-link-main">
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
.navigation-bar-link-main {
  display: inline;
}

</style>
