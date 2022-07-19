<template>
	<v-main class="elevation-1" :style="{ minHeight: `${minHeight}px` }">
		<router-view />
	</v-main>
</template>

<script>
	export default {
		computed: {
			minHeight() {
				return this.$vuetify.breakpoint.height;
			},
		},
	};
</script>

<style></style>
