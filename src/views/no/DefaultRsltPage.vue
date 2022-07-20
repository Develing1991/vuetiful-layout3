<template>
	<v-container :class="{ 'px-5': isGalaxyFold, 'px-10': !isGalaxyFold }">
		<div class="mt-6 mb-6 mx-3 text-center">
			<div class="font-weight-bold" style="font-size: 20px">{{ title }}</div>
		</div>
		<v-row>
			<v-col
				v-for="productItem in productList"
				:key="productItem.product_cd"
				cols="6"
				:class="{ 'px-1': true, 'px-5': $vuetify.breakpoint.sm }"
			>
				<ProductCard :product-item="productItem" @wish="wishDoit" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import ProductCard from '@/components/card/ProductCard.vue';
	import ComputedMixin from '@/mixins/ComputedMixin.vue';
	export default {
		components: {
			ProductCard,
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
		},
	};
</script>

<style></style>
