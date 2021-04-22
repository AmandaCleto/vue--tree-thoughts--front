<template>
  <div class="form">
    <div class="alignLeft">
      <slot name="header"/>
    </div>
    <div class="alignCenter">
      <slot name="inputs" />
    </div>
    <div class="alignCenter">
      <slot name="button_action" />
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
}
</script>

<style scoped lang="scss">
.form {
  width: 460px;
  height: 500px;
  background-color: #519897;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border-radius: 5px;

  .alignLeft {
    text-align: left;
    align-items: flex-start;
    width: 100%;
  }

  .alignCenter {
    text-align: center;
    align-self: center;
    width: 100%;
  }
}
</style>
