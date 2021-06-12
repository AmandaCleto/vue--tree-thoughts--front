<template>
    <main>
        <Header name="Amanda Ackerman" />
        <section class="container">
            <transition name="flip" mode="out-in">
                <div
                    class="card-new-thought"
                    v-if="state.flipAdd"
                    @click="flipCard()"
                >
                    <svg
                        width="47"
                        height="62"
                        viewBox="0 0 47 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.01514 59.6263V59.6259V8.18457C1.01514 6.29598 1.76538 4.48475 3.10081 3.14931C4.43625 1.81388 6.24748 1.06364 8.13607 1.06364H38.6198C40.5084 1.06364 42.3196 1.81388 43.6551 3.14931C44.9905 4.48475 45.7408 6.29598 45.7408 8.18457V59.6259V59.6263C45.7409 59.8703 45.6776 60.1101 45.5569 60.3222C45.4362 60.5343 45.2624 60.7113 45.0525 60.8359C44.8426 60.9604 44.6039 61.0281 44.36 61.0323C44.116 61.0366 43.8751 60.9772 43.661 60.8601L43.6605 60.8598L23.6174 49.9237L23.3779 49.7931L23.1385 49.9237L3.0954 60.8598L3.09488 60.8601C2.88081 60.9772 2.63992 61.0366 2.39593 61.0323C2.15195 61.0281 1.91327 60.9604 1.7034 60.8359C1.49352 60.7113 1.31969 60.5343 1.19901 60.3222C1.07833 60.1101 1.01496 59.8703 1.01514 59.6263ZM25.7832 17.7107C25.7832 17.0728 25.5298 16.4611 25.0787 16.01C24.6276 15.5589 24.0159 15.3055 23.3779 15.3055C22.74 15.3055 22.1283 15.5589 21.6772 16.01C21.2261 16.4611 20.9727 17.0728 20.9727 17.7107V22.9264H15.757C15.1191 22.9264 14.5073 23.1799 14.0563 23.6309C13.6052 24.082 13.3518 24.6938 13.3518 25.3317C13.3518 25.9696 13.6052 26.5814 14.0563 27.0324C14.5073 27.4835 15.1191 27.7369 15.757 27.7369H20.9727V32.9526C20.9727 33.5905 21.2261 34.2023 21.6772 34.6534C22.1283 35.1044 22.74 35.3578 23.3779 35.3578C24.0159 35.3578 24.6276 35.1044 25.0787 34.6534C25.5298 34.2023 25.7832 33.5905 25.7832 32.9526V27.7369H30.9989C31.6368 27.7369 32.2486 27.4835 32.6996 27.0324C33.1507 26.5814 33.4041 25.9696 33.4041 25.3317C33.4041 24.6938 33.1507 24.082 32.6996 23.6309C32.2486 23.1799 31.6368 22.9264 30.9989 22.9264H25.7832V17.7107Z"
                            fill="#2E2E2E"
                            fill-opacity="0.25"
                            stroke="black"
                        />
                    </svg>
                </div>

                <div v-else class="card-new-thought-on" :class="[state.color]">
                    <Textarea :editMode="true" cols="30" rows="10"/>
                    <div class="buttons">
                       <pick-color :editMode="true" :color="state.color" @emittedColor="newColorCard" />

                        <div class="confirmation">
                            <button type="button" class="icon" @click="flipCard()">
                                <svg
                                    width="13"
                                    height="12"
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.25096 0.261676C0.411698 0.100986 0.629676 0.0107157 0.85696 0.0107157C1.08424 0.0107157 1.30222 0.100986 1.46296 0.261676L5.99982 4.79853L10.5367 0.261676C10.6157 0.17981 10.7103 0.114511 10.8149 0.0695886C10.9195 0.0246666 11.0319 0.00102135 11.1458 3.23629e-05C11.2596 -0.000956623 11.3724 0.0207306 11.4778 0.0638285C11.5831 0.106926 11.6788 0.170572 11.7593 0.251051C11.8398 0.331531 11.9034 0.427232 11.9465 0.532572C11.9896 0.637912 12.0113 0.75078 12.0103 0.864591C12.0093 0.978402 11.9857 1.09088 11.9408 1.19545C11.8958 1.30003 11.8305 1.39461 11.7487 1.47368L7.21182 6.01053L11.7487 10.5474C11.9048 10.709 11.9912 10.9256 11.9893 11.1503C11.9873 11.375 11.8972 11.59 11.7382 11.7489C11.5793 11.9079 11.3643 11.998 11.1396 12C10.9148 12.0019 10.6983 11.9155 10.5367 11.7594L5.99982 7.22253L1.46296 11.7594C1.3013 11.9155 1.08478 12.0019 0.860044 12C0.635304 11.998 0.420322 11.9079 0.261401 11.7489C0.10248 11.59 0.0123351 11.375 0.0103821 11.1503C0.00842921 10.9256 0.0948244 10.709 0.25096 10.5474L4.78782 6.01053L0.25096 1.47368C0.0902704 1.31294 0 1.09496 0 0.867676C0 0.640392 0.0902704 0.422414 0.25096 0.261676V0.261676Z"
                                        fill="#D48080"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                class="icon"
                                @click="handlerEditMode"
                                :class="state.editMode ? 'focusButton' : ''"
                            >
                                <svg
                                    width="18"
                                    height="12"
                                    viewBox="0 0 18 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.7411 0.2459C17.5771 0.0884031 17.3553 0 17.1241 0C16.8929 0 16.671 0.0884031 16.507 0.2459L6.7921 9.58999L1.54078 4.51627C1.38061 4.34919 1.15831 4.25043 0.922775 4.2417C0.687241 4.23298 0.457767 4.31502 0.284836 4.46976C0.111904 4.62451 0.00968023 4.8393 0.000652761 5.06686C-0.00837471 5.29443 0.0765333 5.51615 0.236698 5.68323L6.7921 12L17.7411 1.44668C17.8231 1.36807 17.8883 1.27454 17.9327 1.17149C17.9771 1.06845 18 0.957921 18 0.84629C18 0.734658 17.9771 0.624131 17.9327 0.521084C17.8883 0.418038 17.8231 0.324512 17.7411 0.2459Z"
                                        fill="#96D480"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </transition>

            <Card
                color="love"
                message="Sextou, com S de: Seguimos o padrão e fomos de hype chicken; Surpreendemos com o trento de torta de maça; Seguimos em frente com o projeto e Sssiistiremos Haikyuu ahusuahs"
                v-for="(item, index) in Array(5)"
                :key="index"
                postDate="12/06/2021"
            ></Card>

            <Mask />
        </section>
    </main>
</template>

<script>
import { reactive, watch } from "vue";
import { useStore } from "vuex";
import { Header, Mask, Card, PickColor, Textarea } from "@/components";

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
            color:  '',
        });
        const store = useStore();

        function flipCard() {
            state.flipAdd = !state.flipAdd;
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

        function handlerEditMode() {
            state.editMode = !state.editMode;
        }

        function newColorCard(value) {
            state.color = value;
        }

        return {
            state,
            flipCard,
            handlerEditMode,
            newColorCard,
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