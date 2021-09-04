<template>
  <main class="login">
    <Form>
      <template v-slot:header>
          <h1 class="greedings">Olá, bem-vindo ao TreeToughts</h1>
          <p class="informative">Acesse sua conta para continuar.</p>
      </template>
      <template v-slot:inputs>
        <Input label="E-mail" type="email"/>
        <Input label="Senha" type="password"/>
      </template>
      <template v-slot:button_action>
          <button class="button_enter" v-on:click="login">Entrar</button>
      </template>
      <template v-slot:footer>
        <p>Não possui uma conta? <a href="#" v-on:click.prevent="register">Clique aqui</a></p>
      </template>
    </Form>
  </main>
</template>

<script>
// @ is an alias to /src
import { Form, Input } from '@/components'
import router from '@/router'

export default {
  name: 'Login',
  components: {
    Form, Input
  },
  setup () {
    function login() {
       router.push({ name: 'Panel' })
    }
    function register() {
       router.push({ name: 'Register' })
    }
    return { login, register }
  }
}
</script>

<style lang="scss" scoped>
  main {
    background: url('~@/assets/background.svg') center bottom no-repeat,
      linear-gradient(360deg, #F7F4EA 41.21%, #EDEDED 90.08%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>