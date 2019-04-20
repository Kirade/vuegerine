<template>
  <div class="navigation-bar">
    This is NavBar
    <navigation-bar-item
      v-for="item in items"
      :key="item.name"
      :item="item"
      class="navbar-item-container"
    ></navigation-bar-item>
  </div>
</template>

<script>
import NavigationBarItem from './NavigationBarItem'

export default {
  name: 'NavigationBar',
  components: {
    NavigationBarItem
  },
  data () {
    return {
      items: [
        {
          name: 'Home',
          to: '/home'
        },
        {
          name: 'About',
          to: '/about'
        },
        {
          name: 'Store',
          to: '/store'
        },
        {
          name: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
.navigation-bar {
  border: 2px solid;
  height: 30px;
  text-align: center;
}
.navbar-item-container {
  display: inline;
}
</style>
