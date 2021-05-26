<template>
	<div
		class="mask"
		v-show="store.state.card.showMaskEditMode"
		@click="store.commit('changeCardState', false)">
	</div>
</template>
<script>
import { useStore } from 'vuex';
export default {
	name: 'Mask',
	setup() {
		const store = useStore();
		return {
			store
		}
	}
}
</script>
<style lang="scss" scoped>
	.mask {
		// background: transparent;
		background: #80008063;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		z-index: 10;
	}
</style>