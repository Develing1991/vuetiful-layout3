<template>
	<div>
		<div v-if="useTitle" class="mt-6 mb-6 mx-3 text-center">
			<div class="font-weight-bold" style="font-size: 20px">{{ title }}</div>
			<div class="primary--text" style="font-size: 12px">
				{{ subTitle }}
			</div>
		</div>
		<div v-if="showAll" class="ml-4 subtitle-2" @click="$emit('showAll')">
			전체보기 +
		</div>

		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			useTitle: {
				type: Boolean,
				default: false,
			},
			title: {
				type: String,
				default: '',
			},
			subTitle: {
				type: String,
				default: '',
			},
			showAll: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>

<style></style>
