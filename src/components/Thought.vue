<template>
  <div class="container">
    <p>
      {{description}}
    </p>
    <div class="buttons">
      <a href="#">trash</a>
      <a href="#">pencil</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thought',
  props: {
    description: {
      type: String,
      require: true
    },
    type: {
      type: String,
      default: 'undefined'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>