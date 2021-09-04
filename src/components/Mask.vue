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
		background: transparent;
		position: fixed;
		width: 100vw;
		height: calc(100% + 80px);
		top: -80px;
		right: 50%;
		transform: translateX(50%);
		z-index: 10;
	}
</style>