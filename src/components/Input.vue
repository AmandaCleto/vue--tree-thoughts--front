<template>
  <div class="input">
    <input type="email" name="" id="">
  </div>
</template>

<script>
export default {
  name: 'input',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  height: auto;

  input {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
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
