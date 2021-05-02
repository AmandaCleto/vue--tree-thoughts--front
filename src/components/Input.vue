<template>
  <div class="input-component">
    <div class="input" :class="state.value ? 'fulfilled': ''">
      <label :for="type" >{{label}}</label>
      <input :type="state.passwordFieldType" name="email" @input="state.value = $event.target.value" :id="type" >
    </div>
    <button class="eye" v-on:click="hidePassword" v-if="type == 'password'">
      <img :src="state.hideEye ? iconEyeClosed : iconEyeOpened" alt="icone de olho">
    </button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'input',
  props: {
    label: String,
    type: String,
  },
  data() {
    return {
      iconEyeClosed: require('../assets/eye-off.svg'),
      iconEyeOpened: require('../assets/eye.svg'),
    }
  },
  setup(props) {
    const state = reactive({
      value: '',
      hideEye: true,
      passwordFieldType: props.type,
    });

    function hidePassword() {
      state.hideEye = state.hideEye === true ? false : true;
      if (state.hideEye) {
        state.passwordFieldType = 'password';
      } else {
        state.passwordFieldType = 'text';
      }
      console.log(state.passwordFieldType);
    }
    return { hidePassword, state };
  },
}
</script>

<style scoped lang="scss">
  .input-component {
    position: relative;
    .input {
      width: 100%;
      height: auto;
      position: relative;

      &:focus-within, &.fulfilled {
        label {
          color: $theme-white;
          font-size: 15px;
          bottom: 95px;
        }
      }

      label {
        position: absolute;
        font-size: 16px;
        bottom: 55px;
        left: 10px;
        z-index: 2;
        transition: 0.2s;
      }

      input {
        width: 100%;
        height: 50px;
        margin-bottom: 40px;
        border-radius: 5px 5px 0 0;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #2E2E2E;
        outline: 0;
        color: #2E2E2E;
        padding: 10px;
        position: relative;
        z-index: 0;
      }
    }

    .eye {
      position: absolute;
      top: 0px;
      right: 5px;
      height: 50px;
      width: 50px;
      background-color: unset;
      border: unset;
      overflow: unset;
      z-index: 1;
      cursor: pointer;
    }
  }
</style>
