<template>
	<div>
		<v-card tile elevation="0">
			<v-list-item dense class="mt-2">
				<v-list-item-content>
					<v-list-item-title> NNN개의 검색결과가 있습니다. </v-list-item-title>
					<!-- <v-list-item-subtitle>2022.00.00</v-list-item-subtitle> -->
				</v-list-item-content>
			</v-list-item>
			<v-divider />

			<v-row class="px-0 mx-0">
				<v-col cols="8" class="px-0 mx-0">
					<v-btn
						class="float-left my-4 ml-4 px-1"
						outlined
						small
						tile
						elevation="0"
						@click="slideOpen('A01')"
						>카페 ▼
					</v-btn>
					<v-btn
						class="float-left my-4 mx-0 ml-4 px-1"
						outlined
						small
						tile
						elevation="0"
						@click="slideOpen('B01')"
						>브랜드 ▼
					</v-btn>
				</v-col>
				<v-col cols="4" class="px-0">
					<v-btn
						class="float-right my-4 mx-0 mr-4 px-1"
						outlined
						small
						tile
						elevation="0"
						@click="slideOpen('C01')"
						>인기상품순 ▼
					</v-btn>
				</v-col>
			</v-row>
			<v-divider />
			<ProductListItem
				mdi-icon="mdi-heart"
				mdi-icon-outline="mdi-heart-outline"
			/>
			<BottomSlideModal :show-slide="showSlide">
				<SheetCategory
					v-show="slide_target_cd === 'A01'"
					@close="showSlide = false"
				/>
				<SheetBrands
					v-show="slide_target_cd === 'B01'"
					@close="showSlide = false"
				/>
				<SheetOrderBy
					v-show="slide_target_cd === 'C01'"
					@close="showSlide = false"
				/>
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
	import SheetCategory from '@/views/sc/components/SheetCategory.vue';
	import SheetBrands from '@/views/sc/components/SheetBrands.vue';
	import SheetOrderBy from '@/views/sc/components/SheetOrderBy.vue';
	import BottomSlideModal from '@/components/pop/BottomSlideModal.vue';
	export default {
		components: {
			ProductListItem,
			BottomSlideModal,
			SheetCategory,
			SheetBrands,
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
