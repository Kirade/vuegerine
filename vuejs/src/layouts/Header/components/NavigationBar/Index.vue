<template>
  <div class="navigation-bar-container">
    <p class="navigation-bar-left-item">Left Icon Section</p>
    <div class="navigation-bar-center-item-container">
      <navigation-bar-item
        v-for="item in items"
        :key="item.name"
        :item="item"
      ></navigation-bar-item>
    </div>
    <button class="navigation-bar-right-item">Right Side Button</button>
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
  width: 100%;
  height: 30px;
  text-align: center;
}

.navigation-bar-center-item-container {
  display: inline-block;
}

.navigation-bar-left-item {
  float: left;
}

.navigation-bar-right-item {
  float: right;
}
</style>
