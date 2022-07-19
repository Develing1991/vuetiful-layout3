<template>
	<v-app-bar app color="white elevation-1">
		<div @click="$router.push({ name: 'MenuPage' })">
			<v-icon>mdi-menu</v-icon>
		</div>
		<v-spacer />
		<div @click="$emit('center')">꿀콘 로고</div>
		<v-spacer />
		<div @click="$emit('right')">
			<v-icon>mdi-account-outline</v-icon>
		</div>
		<template v-slot:extension app>
			<v-text-field
				placeholder="프로모션 텍스트 노출"
				class="mx-3"
				rounded
				dense
				outlined
				append-icon="mdi-magnify"
				readonly
				:hide-details="true"
				@click="routerGo"
			/>
			<!-- <v-tabs align-with-title fixed-tabs>
				<v-text-field
					placeholder="프로모션 텍스트 노출"
					class="mx-3"
					rounded
					dense
					outlined
					clearable
					clear-icon="mdi-close-circle"
				/>
			</v-tabs> -->
		</template>
	</v-app-bar>
</template>

<script>
	export default {
		components: {},
		data() {
			return {};
		},
		methods: {
			routerGo() {
				alert('go 검색페이지');
			},
		},
	};
</script>

<style></style>
