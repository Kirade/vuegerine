<template>
  <div class="header-main">
    <navigation-bar></navigation-bar>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar/Index'

export default {
  components: {
    NavigationBar
  }
}
</script>

<style scoped>
.header-main {
  border: 2px solid;
}
</style>
