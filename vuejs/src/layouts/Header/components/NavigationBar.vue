<template>
  <div class="navigation-bar">
    This is NavBar
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/store">Store</router-link>
    <router-link to="/contact">contact</router-link>
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
