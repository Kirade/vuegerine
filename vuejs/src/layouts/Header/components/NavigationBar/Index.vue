<template>
  <div class="navigation-bar-container">
    <navigation-bar-item
      v-for="item in items"
      :key="item.name"
      :item="item"
    ></navigation-bar-item>
  </div>
</template>

<script>
import NavigationBarItem from './NavigationBarItem'

export default {
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

}

</style>
