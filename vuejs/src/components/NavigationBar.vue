<template>
  <div class="navigation-bar">
    <!--   TODO: navigation 에서 부모인 base로 이벤트 전달 필요   -->
    <li v-for="page in pages" :key="page.name">
      {{ page }}
    </li>
    Naviagtion Bar
    <router-link :to="{ name: 'hello' }">To Hello</router-link>
    <router-link :to="{ name: 'Test.vue' }">To Test</router-link>
  </div>
</template>

<script>
import Landing from '@/pages/Landing/Landing'
import Hello from '@/components/HelloWorld'
import Test from '@/components/Test'

export default {
  name: 'NavigationBar',
  components: {
    Landing,
    Hello,
    Test
  }
}
</script>

<style scoped>
.navigation-bar {
  border: 2px solid;
  width: 100%;
  height: 30px;
  text-align: center;
}
</style>
