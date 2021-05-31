<template>
    <div class="dropdown-colors" v-if="state.editMode" @mouseleave="setNewCardColor(false)">
        <button class="undefined" @mouseover="viewNewCardColor('undefined')" @click="setNewCardColor('undefined')"></button>
        <button class="anger" @mouseover="viewNewCardColor('anger')" @click="setNewCardColor('anger')"></button>
        <button class="happiness" @mouseover="viewNewCardColor('happiness')" @click="setNewCardColor('happiness')"></button>
        <button class="sadness" @mouseover="viewNewCardColor('sadness')" @click="setNewCardColor('sadness')"></button>
        <button class="fear" @mouseover="viewNewCardColor('fear')" @click="setNewCardColor('fear')"></button>
        <button class="disgusted" @mouseover="viewNewCardColor('disgusted')" @click="setNewCardColor('disgusted')"></button>
        <button class="love" @mouseover="viewNewCardColor('love')" @click="setNewCardColor('love')"></button>
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
            currentColor: props.color
        });
        watch(
            () => props.editMode,
            (newValue) => {
                state.editMode = newValue
            }
        );

        function viewNewCardColor(color) {
            state.color = color;
            context.emit('emittedColor', color)
        }

        function setNewCardColor(color) {
            if(color) {
                state.currentColor = color;
            }
            context.emit('emittedColor', state.currentColor)
        }

        return {
            state,
            viewNewCardColor,
            setNewCardColor
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
    z-index: 10;
    position: absolute;
    right: -8px;
    top: 47px;

    &::before {
        content: '';
        background: #fff;
        height: 15px;
        width: 15px;
        border-radius: 3px;
        transform: rotate(45deg);
        position: absolute;
        top: -6px;
        right: 15px;
    }

    button {
        margin: 0 5px;
        width: 20px;
        height: 20px;
        cursor: pointer;
        border-radius: 50%;
        border: none;
        transition: all 100ms ease;
        z-index: 9;

        &:hover {
            transform: scale(2);
            z-index: 10;
        }
        &:hover::before {
            left: 50%;
            position: absolute;
            top: 50%;
            background-color: transparent !important;
            font-size: 10px;
            z-index: 10;
            transform: translate(-50%, -50%);
        }
        &.undefined:hover::before {
            content: "😶";
        }
        &.anger:hover::before {
            content: "😡";
        }
        &.happiness:hover::before {
            content: "😁";
        }
        &.sadness:hover::before {
            content: "😢";
        }
        &.fear:hover::before{
            content: "😱";
        }
        &.disgusted:hover::before {
            content: "🤢";
        }
        &.love:hover::before {
            content: "😍";
        }
    }
}
</style>