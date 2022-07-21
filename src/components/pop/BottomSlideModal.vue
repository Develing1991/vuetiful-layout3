<template>
	<v-bottom-sheet
		v-model="showSlide"
		class="mx-auto"
		max-width="720px"
		persistent
	>
		<slot></slot>
	</v-bottom-sheet>
</template>

<script>
	export default {
		props: {
			showSlide: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			aaa() {
				console.log('zxfdsfdskljdsf;lkjfd');
			},
		},
	};
</script>

<style></style>
