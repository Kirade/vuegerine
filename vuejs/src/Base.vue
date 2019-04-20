<template>
  <div class="base-template">
    <NavigationBar></NavigationBar>
    Base Template
    <component :is="currentComponent"></component>
    <ul>
    </ul>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'Base',
  components: {
    NavigationBar
  },
  data () {
    return {
      // TODO: Landing을 기본으로 전달받아야함.
      'currentComponent': ''
    }
  },
  methods: {
    setPage: (page) => {
      this.data.currentComponent = page
    }
  }
}
</script>

<style scoped>

</style>
