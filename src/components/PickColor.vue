<template>
    <div
        class="dropdown-colors"
        v-if="state.editMode"
        @mouseleave="setNewCardColor(false)"
    >
        <div class="animationWrapper">
            <lottie-animation
                path="partyAnimation.json"
                @AnimControl="(anim) => setAnimController(anim, 'undefined')"
                :autoPlay="false"
                :loop="false"
                class="partyAnimation"
                :width="150"
                :height="150"
            />
            <button
                class="undefined"
                @mouseover="viewNewCardColor('undefined')"
                @click="setNewCardColor('undefined')"
            ></button>
        </div>

        <div class="animationWrapper">
            <lottie-animation
                path="partyAnimation.json"
                @AnimControl="(anim) => setAnimController(anim, 'anger')"
                :autoPlay="false"
                :loop="false"
                class="partyAnimation"
                :width="150"
                :height="150"
            />
            <button
                class="anger"
                @mouseover="viewNewCardColor('anger')"
                @click="setNewCardColor('anger')"
            ></button>
        </div>

        <div class="animationWrapper">
            <lottie-animation
                path="partyAnimation.json"
                @AnimControl="(anim) => setAnimController(anim, 'happiness')"
                :autoPlay="false"
                :loop="false"
                class="partyAnimation"
                :width="150"
                :height="150"
            />
            <button
                class="happiness"
                @mouseover="viewNewCardColor('happiness')"
                @click="setNewCardColor('happiness')"
            ></button>
        </div>

        <div class="animationWrapper">
            <lottie-animation
                path="partyAnimation.json"
                @AnimControl="(anim) => setAnimController(anim, 'sadness')"
                :autoPlay="false"
                :loop="false"
                class="partyAnimation"
                :width="150"
                :height="150"
            />
            <button
                class="sadness"
                @mouseover="viewNewCardColor('sadness')"
                @click="setNewCardColor('sadness')"
            ></button>
        </div>

        <div class="animationWrapper">
            <lottie-animation
                path="partyAnimation.json"
                @AnimControl="(anim) => setAnimController(anim, 'fear')"
                :autoPlay="false"
                :loop="false"
                class="partyAnimation"
                :width="150"
                :height="150"
            />
            <button
                class="fear"
                @mouseover="viewNewCardColor('fear')"
                @click="setNewCardColor('fear')"
            ></button>
        </div>

        <div class="animationWrapper">
            <lottie-animation
                path="partyAnimation.json"
                @AnimControl="(anim) => setAnimController(anim, 'disgusted')"
                :autoPlay="false"
                :loop="false"
                class="partyAnimation"
                :width="150"
                :height="150"
            />
            <button
                class="disgusted"
                @mouseover="viewNewCardColor('disgusted')"
                @click="setNewCardColor('disgusted')"
            ></button>
        </div>

        <div class="animationWrapper">
            <lottie-animation
                path="partyAnimation.json"
                @AnimControl="(anim) => setAnimController(anim, 'love')"
                :autoPlay="false"
                :loop="false"
                class="partyAnimation"
                :width="150"
                :height="150"
            />
            <button
                class="love"
                @mouseover="viewNewCardColor('love')"
                @click="setNewCardColor('love')"
            ></button>
        </div>
    </div>
</template>

<script>
import { reactive, watch, ref } from "vue";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
    name: "PickColor",
    emits: ["emittedColor"],
    components: {
        LottieAnimation,
    },
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
            currentColor: props.color,
            animaParty: {
                undefined: null,
                anger: null,
                happiness: null,
                sadness: null,
                fear: null,
                disgusted: null,
                love: null,
            }
        });
        const refAnimaParty = ref([]);

        watch(
            () => props.editMode,
            (newValue) => {
                state.editMode = newValue;
            }
        );

        function viewNewCardColor(color) {
            state.color = color;
            context.emit("emittedColor", color);
        }

        function setNewCardColor(color) {
            if (color) {
                state.currentColor = color;
                state.animaParty[color].wrapper.style.opacity = 1;
                state.animaParty[color].play();
            }
            context.emit("emittedColor", state.currentColor);
        }

        function setAnimController(animaParty, index) {
            state.animaParty[index] = animaParty;
            state.animaParty[index].onComplete = function () {
                state.animaParty[index].wrapper.style.opacity = 0;
                state.animaParty[index].goToAndStop(0);
            };
        }

        return {
            state,
            viewNewCardColor,
            setNewCardColor,
            setAnimController,
            refAnimaParty,
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
        content: "";
        background: #fff;
        height: 15px;
        width: 15px;
        border-radius: 3px;
        transform: rotate(45deg);
        position: absolute;
        top: -6px;
        right: 15px;
    }

    .animationWrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .partyAnimation {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            opacity: 0;
            z-index: 20;
            transition: opacity 300ms;
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
            &.fear:hover::before {
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
}
</style>