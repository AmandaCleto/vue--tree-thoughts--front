<template>
  <div class="input" :class="value ? 'fulfilled': ''">
    <label :for="type" >{{label}}</label>
    <input :type="type" name="email" @input="value = $event.target.value" :id="type" >
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'input',
  props: {
    label: String,
    type: String,
  },
  data() {
    return {
      value: '',
      mySVG: require('../assets/eye-closed.svg'),
    }
  },
  setup() {
    // const amount = ref(false);
    // function mouseDown() {
    //   amount.value=!amount.value
    // }
    // function mouseLeave() {
    //   amount.value=!amount.value
    // }
    // return { amount, mouseDown, mouseLeave };
  }
}
</script>

<style scoped lang="scss">
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
  }
}
</style>
