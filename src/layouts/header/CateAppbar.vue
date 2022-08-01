<template>
	<v-app-bar app color="white elevation-1">
		<span v-if="true" class="font-weight-bold">completed0728</span>
		<v-btn
			v-else
			color="grey darken-1"
			elevation="0"
			tile
			small
			outlined
			:ripple="false"
		>
			<div class="black--text">로그인</div>
		</v-btn>

		<v-btn
			color="grey darken-1"
			class="ml-3"
			elevation="0"
			tile
			small
			outlined
			:ripple="false"
		>
			<div class="black--text">{{ true ? '회원가입' : '로그아웃' }}</div>
		</v-btn>
		<v-spacer />

		<div @click="$router.go(-1)">
			<v-icon size="30">mdi-close</v-icon>
		</div>
	</v-app-bar>
</template>

<script>
	export default {};
</script>

<style></style>
