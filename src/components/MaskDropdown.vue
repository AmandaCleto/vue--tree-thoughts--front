<template>
	<teleport to="body">
		<div class="dropdown-mask" @click="$emit('')"></div>
	</teleport>
</template>
<script>
export default {
  emits: ['handlerDropdownState']
}
</script>
<style lang="scss">
	.dropdown-mask {
		background: transparent;
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		right: 0;
		z-index: 10;
		pointer-events: none;
	}
</style>