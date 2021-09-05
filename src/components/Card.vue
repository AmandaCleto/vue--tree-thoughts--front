<template>
    <span class="separator"></span>
    <div class="card" :class="[state.color, state.editMode ? 'floatMask' : '']">
        <p class="date">{{postDate}}</p>
        <Textarea :description="description" :editMode="state.editMode" />
        <div class="icons">
            <button type="button" class="icon">
                 <img src="../assets/delete.svg" alt="icone de deletar">
            </button>
            <button
                type="button"
                class="icon"
                @click="handlerEditMode"
                :class="state.editMode ? 'focusButton' : ''"
            >
               <img src="../assets/edit.svg" alt="icone de editar">
            </button>
            <transition name="fade" mode="in-out">
                <pick-color :editMode="state.editMode" :color="state.color" @emittedColor="newColorCard"/>
            </transition>
        </div>
    </div>
</template>

<script>
import { reactive, watch, ref } from "vue";
import { useStore } from "vuex";
import PickColor from "./PickColor";
import Textarea from './Textarea';

export default {
    name: "Card",
    props: {
        color: {
            type: String,
            default: "undefined",
        },
        description: {
            type: String,
            default: "",
        },
        postDate: {
            type: String,
            default: "",
        }
    },
    components: {
        PickColor,
        Textarea
    },
    setup(props) {
        const state = reactive({
            editMode: false,
            color: props.color,
        });
        const store = useStore();

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
            handlerEditMode,
            newColorCard
        };
    },
};
</script>

<style lang="scss">
//card
.card {
    padding: 20px 30px;
    width: 450px;
    position: relative;
    border-radius: 5px;

    .date {
        position: absolute;
        top: -30px;
        left: 0;
        color: #9B9B9B;
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
