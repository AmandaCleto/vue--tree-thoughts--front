<template>
  <router-view/>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');
  * {
    box-sizing: border-box;    
    padding: 0;
    margin: 0;
    outline: none;
    font-family: 'DM Serif Display', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .container {
    width: 100%;
    max-width: 1140px;
    span.separator {
      width: 500px;
      height: 180px;
      align-self: center;
    }

    & > .separator:nth-of-type(even){
      background: url('~@/assets/line-dashed-right.svg') no-repeat;
    }
    & > .separator:nth-of-type(odd){
      background: url('~@/assets/line-dashed-left.svg') no-repeat;
    }

    & > .card:nth-of-type(even) {
      align-self: flex-end;
    }
    & > .card:nth-of-type(odd) {
      align-self: flex-start;
    }

  }
</style>
