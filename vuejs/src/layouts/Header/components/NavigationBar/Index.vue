<template>
  <div class="navigation-bar-container">
    This is NavBar
    <navigation-bar-item
      v-for="item in items"
      :key="item.name"
      :item="item"
      class="navigation-bar-item"
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
.navigation-bar-container {
  border: 2px solid;
  height: 30px;
  text-align: center;
}
.navigation-bar-item {
  display: inline;
}
</style>
