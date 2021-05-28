<template>
    <div class="dropdown-colors" v-if="state.editMode">
        <button class="undefined" @click="setNewCardColor('undefined')"></button>
        <button class="anger" @click="setNewCardColor('anger')"></button>
        <button class="happiness" @click="setNewCardColor('happiness')"></button>
        <button class="sadness" @click="setNewCardColor('sadness')"></button>
        <button class="fear" @click="setNewCardColor('fear')"></button>
        <button class="disgusted" @click="setNewCardColor('disgusted')"></button>
        <button class="love" @click="setNewCardColor('love')"></button>
    </div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
    name: "PickColor",
    emits: ["emittedColor"],
    props: {
        color: {
            type: String,
            default: "undefined",
        },
        editMode: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, context) {
        const state = reactive({
            editMode: props.editMode,
        });

        watch(
            () => props.editMode,
            (newValue) => {
                state.editMode = newValue;
            }
        );

        function setNewCardColor(color) {
            state.color = color;
            context.emit('emittedColor', color)
        }

        return {
            state,
            setNewCardColor,
        };
    },
};
</script>

<style lang="scss" scope>

.dropdown-colors {
    background: #fff;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 8px 10px;
    /* position: absolute; */
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
}
</style>