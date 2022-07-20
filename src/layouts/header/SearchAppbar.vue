<template>
	<v-app-bar app color="white elevation-1">
		<v-icon @click="$router.go(-1)">mdi-arrow-left</v-icon>

		<v-text-field
			placeholder="프로모션 텍스트 노출"
			class="mt-7 mx-3"
			rounded
			dense
			outlined
			append-icon="mdi-magnify"
			@click:append="$router.push({ name: 'SrchRsltPage' })"
		/>

		<template v-if="isProductPage">
			<v-icon>mdi-home-outline</v-icon>
			<v-icon>mdi-account-outline</v-icon>
		</template>

		<!-- <v-spacer />
		<div @click="$emit('right')">
			<v-icon>mdi-account-outline</v-icon>
		</div> -->
	</v-app-bar>
</template>

<script>
	export default {
		computed: {
			isProductPage() {
				return this.$route.fullPath.startsWith('/pd');
			},
		},
		mounted() {
			console.log(this.$route.fullPath);
		},
		methods: {
			aaa() {
				alert('검색!');
			},
		},
	};
</script>

<style></style>
