<template>
  <div class="navigation-bar">
    This is NavBar
    <router-link to="/hello">Hello</router-link>
    <router-link to="/landing">Landing</router-link>
    <router-link to="/test">Test</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
.navigation-bar {
  border: 2px solid;
  height: 30px;
  text-align: center;
}

.navigation-bar li {
  display: inline;
  padding: 0 5px;
}
</style>
