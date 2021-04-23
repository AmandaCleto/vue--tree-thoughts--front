<template>
  <header>
      <div class="container">
        <figure>
          <img :src="teste" :alt="`Imagem de perfil de ${name}`">
          <figcaption>
            {{name}}
          </figcaption>
        </figure>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      teste: require('../assets/profile.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    background-color: $theme-green-strong;
    height: 80px;
    div {
      display: flex;
    }
  }
</style>