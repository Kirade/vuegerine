<template>
  <div class="navigation-bar-item-container">
    <nav-link :to="item.to">
      <nav-item :name="item.name"></nav-item>
    </nav-link>
  </div>
</template>

<script>
import NavItem from './Item'
import NavLink from './Link'

export default {
  components: {
    NavItem,
    NavLink
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.navigation-bar-item-container {
  float: left;
  margin-right: 20px;
}
</style>
