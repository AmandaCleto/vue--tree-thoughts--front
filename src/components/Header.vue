<template>
  <header>
      <div class="container">
        <figure>
          <img src="../assets/logo.svg" alt="Logo Tree-Thoghts">
        </figure>
        <figure>
          <figcaption>
            {{name}}
          </figcaption>
          <img src="../assets/mikasa.png" :alt="`Imagem de perfil de ${name}`">
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
  }
}
</script>

<style lang="scss" scoped>
  header {
    background-color: $theme-green-strong;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1140px;
      width: 100%;
      figure {
        display: flex;
        align-items: center;
        figcaption {
          color: #fff;
          margin-right: 15px;
          font-size: 20px;
        }
      }
    }
  }
</style>