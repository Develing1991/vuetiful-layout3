<template>
	<v-app-bar app color="white elevation-1">
		<v-icon @click="$emit('left')">mdi-arrow-left</v-icon>

		<v-text-field
			placeholder="프로모션 텍스트 노출"
			class="mt-7 mx-3"
			rounded
			dense
			outlined
			append-icon="mdi-magnify"
			@click:append="aaa"
		/>
		<v-icon>mdi-home-outline</v-icon>
		<v-icon>mdi-account-outline</v-icon>
		<!-- <v-spacer />
		<div @click="$emit('right')">
			<v-icon>mdi-account-outline</v-icon>
		</div> -->
	</v-app-bar>
</template>

<script>
	export default {
		methods: {
			aaa() {
				alert('검색!');
			},
		},
	};
</script>

<style></style>
