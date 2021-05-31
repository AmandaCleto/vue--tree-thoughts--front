<template>
    <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap");
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    font-family: "DM Serif Display", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    overflow-x: hidden;
}
.container {
    width: 100%;
    max-width: 1140px;
    span.separator {
        width: 500px;
        height: 180px;
        align-self: center;
    }

	& > .separator:nth-of-type(even) {
        background: url("~@/assets/line-dashed-right.svg") no-repeat;
    }
	& > .card:nth-of-type(even) {
        align-self: flex-end;
	}
	& > .separator:nth-of-type(odd) {
        background: url("~@/assets/line-dashed-left.svg") no-repeat;
    }
	& > .card:nth-of-type(odd) {
        align-self: flex-start;
	}
}

//colors
.undefined {
    background-color: $color-light-undefined !important;
    &::before {
        background-color: $color-undefined !important;
    }
}
.love {
    background-color: $color-light-love !important;
    &::before {
        background-color: $color-love !important;
    }
}
.anger {
    background-color: $color-light-anger !important;
    &::before {
        background-color: $color-anger !important;
    }
}
.happiness {
    background-color: $color-light-happiness !important;
    &::before {
        background-color: $color-happiness !important;
    }
}
.sadness {
    background-color: $color-light-sadness !important;
    &::before {
        background-color: $color-sadness !important;
    }
}
.fear {
    background-color: $color-light-fear !important;
    &::before {
        background-color: $color-fear !important;
    }
}
.disgusted {
    background-color: $color-light-disgusted !important;
    &::before {
        background-color: $color-disgusted !important;
    }
}

</style>
