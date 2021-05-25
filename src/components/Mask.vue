<template>
	<teleport to="body">
		<div class="mask" @click="$emit('handlerMask', {state: true})"></div>
	</teleport>
</template>
<script>
export default {
	name: 'Mask',
	emits: ['handlerMask']
}
</script>
<style lang="scss" scoped>
	.mask {
		// background: transparent;
		background: purple;
		position: fixed;
		width: 10vw;
		height: 100vh;
		top: 0;
		right: 0;
		z-index: 10;
		// pointer-events: none;
	}
</style>