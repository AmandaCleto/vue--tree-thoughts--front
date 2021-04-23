<template>
  <div class="form">
    <div class="alignLeft header">
      <slot name="header"/>
    </div>
    <div class="alignCenter content">
      <slot name="inputs" />
    </div>
    <div class="alignCenter footer">
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

<style lang="scss">
.form {
  width: 460px;
  min-height: 500px;
  background-color: $theme-green-strong;
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

  .header {
    .greedings {
      font-size: 26px;
      color: $theme-white;
      margin-bottom: 5px;
      font-weight: 500;
    }

    .informative {
      color: $theme-white;
      font-size: 18px;
      margin-bottom: 50px;
    }
  }

  .footer {
    color: $theme-white;
    font-size: 18px;
    .button_enter {
      width: 180px;
      height: 40px;
      font-size: 20px;
      border: none;
      outline: none;
      border-radius: 5px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #2E2E2E;
    }
    .button_enter:hover {
      background-color: $color-undefined;
    }

    a {
       color: $theme-white;
    }

    a:hover {
      color: $color-undefined;
    }
  }
}
</style>
