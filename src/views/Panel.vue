<template>
  <main>
    <Header name="Amanda Ackerman" />
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: 'Panel',
  components: {
    Header
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  main {
    background: url('~@/assets/background.svg') center bottom no-repeat, 
      linear-gradient(360deg, #F7F4EA 41.21%, #EDEDED 90.08%);
    display: flex;
    height: 100vh;
  }
</style>