<template>
  <div class="header-main">
    Header Section
    <NavigationBar></NavigationBar>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
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
