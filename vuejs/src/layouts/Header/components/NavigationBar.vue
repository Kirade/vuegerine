<template>
  <div class="navigation-bar">
    This is NavBar
    <!--   TODO: navigation 에서 부모인 base로 이벤트 전달 필요   -->
    <li v-for="page in pages" :key="page.name">
      <p class="page-element">
        <router-link :to="{ name: page.name }">To {{ page.name }}</router-link>
      </p>
    </li>
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
  },
  data () {
    return {
      pages: [
        Landing,
        Hello,
        Test
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

.navigation-bar li {
  display: inline;
  padding: 0 5px;
}

.page-element {
  display: inline;
}
</style>
