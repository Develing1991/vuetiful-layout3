<template>
	<v-sheet class="rounded-t-xl" height="100%">
		<h3 class="pl-6 pt-4 d-inline-block">정렬</h3>
		<v-btn class="ml-4 mb-1" tile x-small outlined @click="$emit('init')">
			초기화
		</v-btn>
		<div class="px-6 py-3">
			<v-list>
				<v-list-item dense>
					<v-list-item-content class="pa-0">
						<v-list-item-title
							class="font-weight-bold primary--text mb-2"
							@click="$emit('close')"
							>인기상품순</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>상품명순</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>가격 낮은 순</v-list-item-title
						>
						<v-list-item-title class="mb-2" @click="$emit('close')"
							>가격 높은 순</v-list-item-title
						>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</div>
	</v-sheet>
</template>

<script>
	export default {};
</script>

<style></style>
