<template>
  <div class="layout-main">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header/Header'
import Footer from './Footer/Footer'
export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
