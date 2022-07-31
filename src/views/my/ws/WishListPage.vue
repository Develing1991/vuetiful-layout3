<template>
	<div>
		<v-card tile elevation="0">
			<v-row class="px-0 mx-0 mt-3 mb-1">
				<v-col cols="4" class="caption">
					<div>총 <span class="primary--text">NNN</span> 개</div>
				</v-col>
				<v-col cols="8" class="text-right">
					<!-- <div>총 NNN개</div> -->
					<v-btn
						class="mr-1"
						outlined
						small
						tile
						elevation="0"
						@click="slideOpen('B01')"
						>전체삭제
					</v-btn>
					<v-btn
						class="ml-1"
						outlined
						small
						tile
						elevation="0"
						@click="slideOpen('C01')"
						>상품명순 ▼
					</v-btn>
				</v-col>
			</v-row>
			<v-divider />
			<ProductListItem
				mdi-icon="mdi-trash-can"
				mdi-icon-outline="mdi-trash-can-outline"
			/>
			<BottomSlideModal :show-slide="showSlide">
				<SheetOrderBy @close="showSlide = false" />
			</BottomSlideModal>
		</v-card>

		<!-- <template>
			<v-list-item dense class="mt-2">
				<v-list-item-content>
					<v-list-item-title> NNN개의 검색결과가 있습니다. </v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider />
			<DefaultRsltPage title="인기상품" />
		</template> -->
	</div>
</template>

<script>
	//import DefaultRsltPage from '@/views/no/DefaultRsltPage.vue';
	import ProductListItem from '@/components/card/ProductListItem.vue';
	import BottomSlideModal from '@/components/pop/BottomSlideModal.vue';
	import SheetOrderBy from '@/views/my/ws/components/SheetOrderBy.vue';
	export default {
		components: {
			ProductListItem,
			BottomSlideModal,
			SheetOrderBy,
			//DefaultRsltPage,
		},
		data() {
			return {
				showSlide: false,
				slide_target_cd: 'A01',
			};
		},
		methods: {
			slideOpen(slide_target_cd) {
				this.slide_target_cd = slide_target_cd;
				this.showSlide = true;
			},
		},
	};
</script>

<style scoped>
	.v-bottom-sheet.v-dialog {
		align-self: flex-end;
		border-radius: 24px;
		flex: 0 1 auto;
		margin: 0;
		overflow: visible;
	}
</style>
