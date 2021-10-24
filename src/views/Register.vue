<template>
    <main class="register">
        <Form>
            <template v-slot:header>
                <h1 class="greedings">Olá, bem-vindo ao TreeToughts</h1>
                <p class="informative">Cadastre-se para começar.</p>
            </template>
            <template v-slot:inputs>
                <Input label="Nome" type="text" name="name" @input="(value) => state.name = value" />
                <Input label="E-mail" type="email" name="email" @input="(value) => state.email = value" />
                <Input label="Senha" type="password" name="password" @input="(value) => state.password = value" />
                <Input label="Confirmar Senha" type="password" name="confirm_password" @input="(value) => state.confirm_password = value" />
            </template>
            <template v-slot:button_action>
                <button class="button_enter" v-on:click="register">
                    Cadastrar
                </button>
            </template>
            <template v-slot:footer>
                <p class="footer">
                    Já tem uma conta?
                    <a href="#" v-on:click.prevent="goToLogin">Clique aqui</a>
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
    name: "Register",
    components: {
        Form,
        Input,
    },
    setup() {
        const state = reactive({
            name: "",
            email: "",
            password: "",
            confirm_password: "",
        });

        function goToLogin() {
            router.push({ name: "Login" });
        }

        function register() {
            if(state.password !== state.confirm_password) {
                return alert('Senhas não coincidem');
            }

            api.post("user", {
                name: state.name,
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
        return { goToLogin, register, state };
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