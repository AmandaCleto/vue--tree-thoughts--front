<template>
	<textarea
		ref="textareaRef"
		name="message"
		:class="editMode ? 'editMode' : ''"
		v-model="description"
		readonly
		@input.passive="handlerInput($event.target)"
		placeholder="Qual a novidade? Conte ai!"
	>
	</textarea>
</template>
<script>
import { ref, watch } from 'vue';

function autoSizeTextArea(element) {
    element.style.height = `auto`;
    element.style.height = `${element.scrollHeight + 10}px`;
}
function changeReadOnlyTextArea(editMode, element) {
	if (editMode) {
		element.removeAttribute("readonly");
		element.focus();
	} else {
		element.setAttribute("readonly", true);
	}
}
export default {
	name: 'Textarea',
	props: {
		description: {
			type: String,
		},
		editMode: {
			type: Boolean,
		}
	},
	mounted () {
        this.$nextTick(() => {
            autoSizeTextArea(this.$refs.textareaRef);
			changeReadOnlyTextArea(this.$props.editMode, this.$refs.textareaRef)
        })
    },
	setup(props) {
		const textareaRef = ref(null);

		watch(
            () => props.editMode,
            (value) => {
				changeReadOnlyTextArea(value, textareaRef.value);
            }
        );

		function handlerInput(target) {
            autoSizeTextArea(target)
        }

		return {
			handlerInput,
			textareaRef
		}
	}
}
</script>
<style lang="scss" scoped>
	textarea {
		color: #5f5f5f;
		font-family: "Didact Gothic", sans-serif;
		line-height: 1.5;
		margin-bottom: 5px;
		resize: none;
		width: 100%;
		background: none;
		border: 1px solid transparent;
		font-size: 16px;
		border-radius: 10px;
		height: auto;
		/* max-height: 280px; */

		&.editMode {
			caret-color: $theme-green-strong;
		}
	}
</style>