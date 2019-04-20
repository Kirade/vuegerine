<template>
  <div class="header-main">
    Header Section
    <navigation-bar></navigation-bar>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar/Index'

export default {
  name: 'Header',
  components: {
    NavigationBar
  }
}
</script>

<style scoped>
.header-main {
  height: 60px;
  border: 2px solid;
}
</style>
