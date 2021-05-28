<template>
    <span class="separator"></span>
    <div class="card" :class="[state.color, state.editMode ? 'floatMask' : '']">
        <textarea
            ref="textareaRef"
            name="message"
            :class="state.editMode ? 'editMode' : ''"
            v-model="message"
            @input.passive="handlerInput($event.target)"
        >
        </textarea>
        <div class="icons">
            <button type="button" class="icon">
                <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.69231 1.875H12.9231C13.5692 1.875 14 2.25 14 2.8125V3.75H0V2.8125C0 2.25 0.538462 1.875 1.07692 1.875H4.30769C4.52308 0.84375 5.70769 0 7 0C8.29231 0 9.47692 0.84375 9.69231 1.875ZM5.38462 1.875H8.61538C8.4 1.3125 7.64615 0.9375 7 0.9375C6.35385 0.9375 5.6 1.3125 5.38462 1.875ZM1.07692 4.6875H12.9231L11.9538 14.1563C11.9538 14.625 11.4154 15 10.8769 15H3.12308C2.58462 15 2.15385 14.625 2.04615 14.1563L1.07692 4.6875Z"
                        fill="#C4C4C4"
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
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.7563 3.36828C15.0812 3.04333 15.0812 2.50174 14.7563 2.19345L12.8066 0.243716C12.4983 -0.0812387 11.9567 -0.0812387 11.6317 0.243716L10.0986 1.7685L13.2232 4.89307L14.7563 3.36828ZM0 11.8754V15H3.12457L12.34 5.77628L9.21539 2.65171L0 11.8754Z"
                        fill="#C4C4C4"
                    />
                </svg>
            </button>
            <transition name="fade" mode="in-out">
                <pick-color :editMode="state.editMode" :color="state.color" @emittedColor="newColorCard"/>
            </transition>
        </div>
    </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import PickColor from "./PickColor";
export default {
    name: "Card",
    props: {
        color: {
            type: String,
            default: "undefined",
        },
        message: {
            type: String,
            default: "",
        },
    },
    components: {
        PickColor,
    },
    setup(props) {
        const state = reactive({
            editMode: false,
            color: props.color,
        });
        const store = useStore();
        const textareaRef = ref(null);

        watch(
            () => state.editMode,
            (value) => {
                if (value) {
                    textareaRef.value.removeAttribute("readonly");
                    textareaRef.value.focus();
                } else {
                    textareaRef.value.setAttribute("readonly", true);
                }
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

        function handlerInput(target) {
            target.style.height = `auto`;
            target.style.height = `${target.scrollHeight}px`;
        }

        return {
            state,
            handlerEditMode,
            textareaRef,
            handlerInput,
            newColorCard
        };
    },
};
</script>

<style lang="scss">
//card
.card {
    padding: 20px 40px;
    width: 450px;
    position: relative;
    border-radius: 5px;
    textarea {
        color: #5f5f5f;
        font-family: "Didact Gothic", sans-serif;
        line-height: 1.5;
        margin-bottom: 5px;
        resize: none;
        width: 100%;
        background: none;
        border: 1px solid transparent;
        font-size: 16px;
        padding: 20px;
        border-radius: 10px;
        overflow: hidden;
        height: auto;

        &.editMode {
            box-shadow: 0px 1px 6px 1px rgba(163, 163, 163, 0.34);
            border: 1px solid #fff;
            caret-color: $theme-green-strong;
        }
    }

    &.floatMask {
        z-index: 15;
    }

    &.card::before {
        content: "";
        width: 10px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .dropdown-colors {
        background: #fff;
        box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 8px 10px;
        position: absolute;
        z-index: 10;
        right: -8px;
        top: 50px;
        button {
            margin: 0 3px;
            width: 15px;
            height: 15px;
            cursor: pointer;
            border-radius: 50%;
            border: none;
            transition: all 200ms ease;
            z-index: 9;
            &:hover {
                transform: scale(1.5);
            }
            &:active,
            &:focus {
                transform: scale(1.4);
            }
        }
        &:after {
            content: "";
            width: 15px;
            height: 15px;
            border-radius: 4px;
            background: #fff;
            display: block;
            position: absolute;
            top: -7px;
            right: 15px;
            transform: rotate(45deg);
            z-index: 8;
        }
    }
    .icons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;

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
            svg path {
                fill: $theme-green-strong;
            }
        }

        .focusButton {
            transform: scale(1.2);
            svg path {
                fill: $theme-green-strong;
            }
        }
    }

    //animation
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
}
</style>
