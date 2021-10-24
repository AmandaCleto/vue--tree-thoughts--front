<template>
    <main class="login">
        <Form>
            <template v-slot:header>
                <h1 class="greedings">Olá, bem-vindo ao TreeToughts</h1>
                <p class="informative">Acesse sua conta para continuar.</p>
            </template>
            <template v-slot:inputs>
                <Input label="E-mail" type="email" @input="(value) => state.email = value" name="email"  />
                <Input label="Senha" type="password" @input="(value) => state.password = value" name="password" />
            </template>
            <template v-slot:button_action>
                <button class="button_enter" v-on:click="authenticate">
                    Entrar
                </button>
            </template>
            <template v-slot:footer>
                <p>
                    Não possui uma conta?
                    <a href="#" v-on:click.prevent="goToRegister">Clique aqui</a>
                </p>
            </template>
        </Form>
    </main>
</template>

<script>
// @ is an alias to /src
import { Form, Input } from "@/components";
import router from "@/router";
import { api } from "../config/axios";
import { reactive } from "vue";

export default {
    name: "Login",
    components: {
        Form,
        Input,
    },
    setup() {
        const state = reactive({
            email: "",
            password: "",
        });

        function authenticate() {
            api.post("authenticate", {
                email: state.email,
                password: state.password,
            })
            .then(({data}) => {
                sessionStorage.setItem('token', `Bearer ${data.token}`);
                router.push({ name: "Panel" });
            })
            .catch((error) => {
                console.log(error);
            });
        }

        function goToRegister() {
            router.push({ name: "Register" });
        }
        return { authenticate, goToRegister, state };
    },
};
</script>

<style lang="scss" scoped>
main {
    background: url("~@/assets/background.svg") center bottom no-repeat,
        linear-gradient(360deg, #f7f4ea 41.21%, #ededed 90.08%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>