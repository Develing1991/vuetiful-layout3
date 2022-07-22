<template>
	<v-app-bar app color="white elevation-1">
		<div @click="$emit('left')"><v-icon>mdi-arrow-left</v-icon></div>
		<v-spacer />

		<div class="font-weight-bold">{{ $route.meta.title }}</div>
		<v-spacer />
	</v-app-bar>
</template>

<script>
	export default {};
</script>

<style></style>
