<template>
    <main>
        <Header :name="state.user.name" />
        <section class="container">
            <transition name="flip" mode="out-in">
                <div
                    class="card-new-thought"
                    v-if="state.flipAdd"
                    @click="flipCard()"
                >
                    <img src="../assets/add-card.svg" alt="icone de adicionar novo card">
                </div>

                <div v-else class="card-new-thought-on" :class="[state.newThought.color]">
                    <Textarea :editMode="true" cols="30" rows="10" v-model="state.newThought.description"/>
                    <div class="buttons">
                       <pick-color :editMode="true" :color="state.newThought.color" @emittedColor="newColorCard" />

                        <div class="confirmation">
                            <button type="button" class="icon" @click="flipCard()">
                                <img src="../assets/close.svg" alt="icone de fechar">
                            </button>
                            <button
                                type="button"
                                class="icon"
                                @click="saveNewThought"
                                :class="state.editMode ? 'focusButton' : ''"
                            >
                               <img src="../assets/check.svg" alt="icone de salvar">
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
            <Card
                v-for="(item, index) in state.thoughts"
                color="love"
                :description="item.description"
                :key="index"
                :postDate="datetimeToPtBr(item.create_at)"
            ></Card>

            <Mask />
        </section>
    </main>
</template>

<script>
import { reactive, watch, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { Header, Mask, Card, PickColor, Textarea } from "@/components";
import { datetimeToPtBr } from '@/utils/dateFormate';
import { api } from "../config/axios";

export default {
    name: "Panel",
    components: {
        Header,
        Card,
        Mask,
        PickColor,
        Textarea
    },

    setup() {
        const state = reactive({
            flipAdd: true,
            editMode: false,
            user: {
                name: ''
            },
            thoughts: [],
            newThought: {
                description: '',
                color: 'undefined',
            }
        });
        const store = useStore();

        function flipCard() {
            state.flipAdd = !state.flipAdd;
            state.newThought.description = '';
            state.newThought.color = 'undefined';
        }

        watch(
            () => state.editMode,
            (value) => {
                store.commit("changeCardState", value);
            }
        );

        watch(
            () => store.state.card.showMaskEditMode,
            (value) => {
                if (!value) {
                    state.editMode = false;
                }
            }
        );

        function saveNewThought() {
            const token = sessionStorage.getItem('token');

            api.post('/thought', {
                description: state.newThought.description,
                emotion_name: state.newThought.color,
            }, {
                headers: {
                    authorization: token
                }
            }).then(({data: {doesThoughtCreated}}) => {
                state.thoughts.unshift(doesThoughtCreated);
                flipCard();
            }).catch((error) => {
                console.error(error);
            })
            state.editMode = !state.editMode;
        }

        function newColorCard(value) {
            state.newThought.color = value;
        }

        onBeforeMount(() => {
            const token = sessionStorage.getItem('token');

            api.get('/user', {
                headers: {
                    authorization: token
                }
            }).then(({data: {getUser}}) => {
                state.user.name = getUser.name;
            }).catch((error) => {
                console.error(error);
            })
        });

        onBeforeMount(() => {
            const token = sessionStorage.getItem('token');

            api.get('/thought', {
                headers: {
                    authorization: token
                }
            }).then(({data: {doesThoughtFound}}) => {
                state.thoughts = doesThoughtFound;
            }).catch((error) => {
                console.error(error);
            })
        });
        return {
            state,
            flipCard,
            saveNewThought,
            newColorCard,
            datetimeToPtBr
        };
    },
};
</script>

<style lang="scss" scoped>
main {
    background: url("~@/assets/background.svg") center top no-repeat,
        url("~@/assets/background-repeat.svg") center 75px repeat-y;
    display: flex;
    align-items: center;
    flex-direction: column;
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 992px;
        background: rgba(247, 244, 234, 0.45);
        backdrop-filter: blur(15px);
        padding: 65px 40px;

        .card-new-thought {
            background: url("~@/assets/new-thought.svg") no-repeat center;
            border-radius: 5px;
            width: 450px;
            height: 210px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;

            svg {
                transition: all 300ms;
            }
            &:hover {
                svg {
                    transform: scale(1.2);
                }
            }
        }
        .card-new-thought-on {
            border-radius: 5px;
            padding: 20px 30px;
            background-color: $color-light-undefined;
            width: 450px;
            height: 210px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            position: relative;
            caret-color: $theme-green-strong;

            &::before {
                content: "";
                width: 10px;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                background-color: rgb(174, 174, 174);
            }

            .buttons {
                border-top: 1px solid #ccc;
                padding-top: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                margin-top: 10px;

                .dropdown-colors {
                    position: initial !important;
                    &::before {
                        content: none;
                    }
                }
            }

            .confirmation {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .icon {
                background-color: $theme-white;
                height: 30px;
                width: 30px;
                border-radius: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                outline: none;
                box-shadow: 0px 1px 10px -2px #8b8b8b;
                cursor: pointer;
                border: 1px solid transparent;
                transition: all 200ms ease;
            }
            .icon:first-child {
                margin-right: 10px;
            }
            .icon:first-child,
            .icon:last-child {
                background-repeat: no-repeat;
                background-position: center;
            }
            .icon:first-child:hover,
            .icon:last-child:hover {
                transform: scale(1.2);
            }
            .icon:first-child:hover {
                svg path {
                    fill: #e63a3a;
                }
            }
            .icon:last-child:hover {
                svg path {
                    fill: #54b504;
                }
            }
        }
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }
    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }

    .flip-enter-active {
        animation: flip-in 0.3s ease;
    }

    .flip-leave-active {
        animation: flip-out 0.3s ease;
    }
}
</style>