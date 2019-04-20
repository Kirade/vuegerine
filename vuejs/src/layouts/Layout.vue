<template>
  <div class="layout-main">
    <layout-header></layout-header>
    <router-view></router-view>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutHeader from './Header/Header'
import LayoutFooter from './Footer/Footer'

export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style scoped>

</style>
