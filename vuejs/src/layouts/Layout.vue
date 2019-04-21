<template>
  <div class="layout-main">
    <header-layout></header-layout>
    <router-view></router-view>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import HeaderLayout from './Header/Header'
import FooterLayout from './Footer/Footer'

export default {
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style scoped>

</style>
