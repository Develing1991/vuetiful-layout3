<template>
	<v-app-bar app color="white elevation-1">
		<div class="font-weight-bold">서비스 이용 약관</div>
		<v-spacer />

		<div @click="$emit('right')">
			<v-icon>mdi-close</v-icon>
		</div>
	</v-app-bar>
</template>

<script>
	export default {};
</script>

<style></style>
