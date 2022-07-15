<template>
	<v-app-bar app color="white elevation-1">
		<div @click="$emit('left')"><v-icon>mdi-arrow-left</v-icon></div>
		<v-spacer />

		<div>텍스트</div>
		<v-spacer />
	</v-app-bar>
</template>

<script>
	export default {};
</script>

<style></style>
