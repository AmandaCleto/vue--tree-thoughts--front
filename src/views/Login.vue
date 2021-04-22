<template>
  <main class="login">
    <Form>
      <template v-slot:header>
          <h1 class="greedings">Olá, bem-vindo ao TreeToughts</h1>
          <p class="informative">Acesse sua conta para continuar.</p>
      </template>
      <template v-slot:inputs>
        <Input label="E-mail" placeholder="Informe o seu email" type="email"/>
        <Input label="Senha" placeholder="Informe a sua senha" type="password"/>
      </template>
      <template v-slot:button_action>
          <button class="button_enter">Entrar</button>
      </template>
      <template v-slot:footer>
        <p class="footer">Não possui uma conta? <a href="#">Clique aqui</a></p>
      </template>
    </Form>
  </main>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'
import Input from '@/components/Input.vue'

export default {
  name: 'Login',
  components: {
    Form, Input
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
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .greedings {
    font-size: 26px;
    color: $theme-white;
    margin-bottom: 5px;
    font-weight: 500;
  }
  .informative {
    color: $theme-white;
    font-size: 18px;
  }
  .button_enter {
    width: 180px;
    height: 40px;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #2E2E2E;
  }
  .button_enter:hover {
   background-color: $color-undefined;
  }
  .footer {
    color: $theme-white;
    font-size: 18px;

    a {
       color: $theme-white;
    }

    a:hover {
      color: $color-undefined;
    }
  }
</style>