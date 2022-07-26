<template>
	<div>
		<div class="mt-6 mb-6 mx-3">
			<div class="font-weight-bold text-center" style="font-size: 20px">
				{{ title }}
			</div>

			<v-row class="mt-4">
				<v-col class="text-left pb-0">
					<span class="font-weight-bold primary--text"> NNN </span>개
				</v-col>
				<v-spacer />
				<v-col class="text-right pb-0">
					<v-btn
						class="pa-0 ma-0"
						outlined
						small
						tile
						elevation="0"
						@click="slideOpen"
						>상품명순 ▼
					</v-btn>
				</v-col>
			</v-row>
		</div>
		<v-divider class="my-4" />
		<v-container :class="{ 'px-5': isGalaxyFold, 'px-10': !isGalaxyFold }">
			<v-row>
				<v-col
					v-for="productItem in productList"
					:key="productItem.product_cd"
					cols="6"
					:class="{ 'px-1': true, 'px-5': $vuetify.breakpoint.sm }"
				>
					<ProductCardItem :product-item="productItem" @wish="wishDoit" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import ProductCardItem from '@/components/card/ProductCardItem.vue';
	import ComputedMixin from '@/mixins/ComputedMixin.vue';
	export default {
		components: {
			ProductCardItem,
		},
		mixins: [ComputedMixin],
		props: {
			title: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				showSlide: false,
				productList: [
					{
						product_cd: 'P01',
						brand_name: '브랜드',
						title: '발행 상품명 ',
						disc_rat: '25',
						seller_prc: '3375',
						cust_prc: '4000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P02',
						brand_name: '브랜드',
						title:
							'발행 상품명 글자수 제한 두 줄로 표시할까요 말까요 가나다라마바사아자차카타파나아알가가ㅏ',
						disc_rat: '30',
						seller_prc: '7000',
						cust_prc: '10000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P03',
						brand_name: '브랜드',
						title:
							'발행 상품명 글자수 제한 두 줄로 표시할까요 말까요 가나다라마바사아자차카타파나아알가가ㅏ',
						disc_rat: '40',
						seller_prc: '5800',
						cust_prc: '8000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
				],
			};
		},
		methods: {
			wishDoit() {
				console.log('wish!');
			},
			slideOpen() {
				this.showSlide = true;
			},
		},
	};
</script>

<style></style>
