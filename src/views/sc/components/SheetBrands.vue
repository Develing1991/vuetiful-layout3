<template>
	<v-sheet class="rounded-t-xl" height="100%">
		<h3 class="pl-6 pt-4 d-inline-block">브랜드</h3>
		<v-btn class="ml-4 mb-1" tile x-small outlined @click="$emit('init')">
			초기화
		</v-btn>
		<div class="ma-3">
			<v-chip-group mandatory active-class="primary--text">
				<v-chip v-for="tag in tags" :key="tag">
					{{ tag }}
				</v-chip>
			</v-chip-group>
		</div>
		<v-text-field
			placeholder="프로모션 텍스트 노출"
			class="mx-3 mb-2"
			rounded
			dense
			outlined
			append-icon="mdi-magnify"
			readonly
			:hide-details="true"
			@click="aaa"
		/>
		<div class="text-center overflow-y-auto" style="max-height: 400px">
			<v-card
				v-for="i in 30"
				:key="i"
				class="d-inline-block ma-2 mx-4"
				tile
				elevation="0"
				outlined
				ripple
				@click="$emit('close')"
			>
				<v-img
					class="white--text align-end"
					height="90px"
					width="90px"
					src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
				/>
				<v-card-title class="pa-0">
					<div class="mx-auto">브랜드</div>
				</v-card-title>
			</v-card>
		</div>

		<!-- <div class="px-6 py-3">
			<v-list>
				<v-list-item dense>
					<v-list-item-content class="pa-0">
						<v-list-item-title
							class="font-weight-bold primary--text mb-2"
							@click="$emit('close')"
							>카페</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>햄버거</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>치킨</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>베이커리/도넛/떡</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>아이스크림</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>편의점</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>피자</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>기타</v-list-item-title
						>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</div> -->
	</v-sheet>
</template>

<script>
	export default {
		data() {
			return {
				tags: [
					'전체',
					'ㄱ',
					'ㄴ',
					'ㄷ',
					'ㄹ',
					'ㅁ',
					'ㅂ',
					'ㅅ',
					'ㅇ',
					'ㅈ',
					'ㅊ',
					'ㅋ',
					'ㅌ',
					'ㅍ',
					'ㅎ',
				],
			};
		},
		methods: {
			aaa() {
				console.log(' 텍스트 검색중...');
			},
		},
	};
</script>

<style></style>
