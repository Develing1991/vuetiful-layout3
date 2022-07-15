<template>
	<v-app-bar app color="white elevation-1">
		<span class="font-weight-bold" v-if="true">completed0728</span>
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

		<div @click="$emit('right')">
			<v-icon>mdi-close</v-icon>
		</div>
	</v-app-bar>
</template>

<script>
	export default {};
</script>

<style></style>
