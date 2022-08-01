<template>
	<v-app-bar app color="white elevation-1">
		<v-icon size="30" @click="$router.go(-1)">mdi-arrow-left</v-icon>

		<v-text-field
			placeholder="프로모션 텍스트 노출"
			class="mt-7 mx-3"
			rounded
			dense
			outlined
			append-icon="mdi-magnify"
			@click:append="searchWord"
		/>

		<template v-if="isProductPage">
			<v-icon size="30" @click="$router.push({ name: 'MainPage' })"
				>mdi-home-outline</v-icon
			>
			<v-icon size="30" @click="$router.push({ name: 'MyPage' })"
				>mdi-account-outline</v-icon
			>
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
		mounted() {},
		methods: {
			searchWord() {
				if (this.$route.name !== 'SrchRsltPage') {
					this.$router.push({ name: 'SrchRsltPage' });
					console.log('SrchRsltPage에서 검색실행하기');
				} else {
					console.log('검색 fetch 실행');
				}
				//
			},
		},
	};
</script>

<style></style>
