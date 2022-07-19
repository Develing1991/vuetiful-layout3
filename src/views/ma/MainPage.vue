<template>
	<div class="ma-2">
		<!-- 최상단 배너 -->
		<SlideBanner height="200" class="mb-6">
			<SwiperSlide v-for="i in 3" :key="i">
				<v-img
					src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
					class="white--text align-end ma-2"
					gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
					height="200"
				/>
			</SwiperSlide>
		</SlideBanner>

		<!-- 카테고리, 브랜드, 가격  탭 -->
		<SelectBanner />
		<v-divider />
		<!-- 꿀콘 추천상품 -->
		<SlideBanner
			:use-title="true"
			title="꿀콘 추천 상품"
			sub-title="MD가 추천하는 꿀이 되는 상품 모음"
			:page="true"
			:options="{
				slidesPerView: 2.5,
				spaceBetween: 10,
				freeMode: true,
			}"
		>
			<SwiperSlide
				v-for="productItem in productList"
				:key="productItem.product_cd"
			>
				<SlideBannerCard :product-item="productItem" @wish="wishDoit" />
			</SwiperSlide>
		</SlideBanner>
		<!-- 인기상품 -->
		<SlideBanner
			:use-title="true"
			title="인기상품"
			sub-title="주간 가장 인기가 많은 상품 모음"
			:page="true"
			:options="{
				slidesPerView: 2.5,
				spaceBetween: 10,
				freeMode: true,
			}"
		>
			<SwiperSlide
				v-for="productItem in productList"
				:key="productItem.product_cd"
			>
				<SlideBannerCard :product-item="productItem" @wish="wishDoit" />
			</SwiperSlide>
		</SlideBanner>
		<!-- 꿀콘 신상 -->
		<SlideBanner
			height="250"
			:use-title="true"
			title="꿀콘 신상"
			sub-title=""
			:page="true"
			:options="{
				slidesPerView: 2.5,
				spaceBetween: 10,
				freeMode: true,
			}"
		>
			<SwiperSlide
				v-for="productItem in productList"
				:key="productItem.product_cd"
			>
				<SlideBannerCard :product-item="productItem" @wish="wishDoit" />
			</SwiperSlide>
		</SlideBanner>
		<!-- 인기 브랜드 -->
		<SlideBanner
			height="350"
			:use-title="true"
			title="인기 브랜드"
			sub-title=""
			:show-all="true"
			:page="true"
			:options="{
				slidesPerView: 4,
				slidesPerColumn: 2,
				spaceBetween: 10,
			}"
		>
			<SwiperSlide v-for="i in 15" :key="i" style="height: 160px" class="ma-0">
				<v-card
					class="d-inline-block pa-2 ma-2"
					style="text-align: center"
					tile
					elevation="0"
				>
					<v-img
						class="white--text align-end"
						height="80px"
						width="80px"
						src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
					/>
					<v-card-title class="pa-0">
						<div class="mx-auto">브랜드</div>
					</v-card-title>
				</v-card>
			</SwiperSlide>
		</SlideBanner>

		<!-- 꿀콘 발송방법 안내 배너 -->
		<SlideBanner height="200" class="mb-6">
			<SwiperSlide v-for="i in 3" :key="i">
				<div
					class="secondary lighten-2 white--text font-weight-bold"
					style="
						height: 160px;
						display: flex;
						justify-content: center;
						align-items: center;
					"
				>
					꿀콘 발송방법 안내
				</div>
			</SwiperSlide>
		</SlideBanner>
		<v-divider />
	</div>
</template>

<script>
	import SlideBanner from '@/views/ma/components/SlideBanner.vue';
	import SelectBanner from '@/views/ma/components/SelectBanner.vue';
	import SlideBannerCard from '@/views/ma/components/SlideBannerCard.vue';

	import { SwiperSlide } from 'vue-awesome-swiper';
	export default {
		components: {
			SlideBanner,
			SelectBanner,
			SlideBannerCard,
			SwiperSlide,
		},
		data() {
			return {
				tab: null,
				items: [
					{
						id: 'cate',
						title: '카테고리',
						contents: '카테고리내용',
					},
					{
						id: 'brand',
						title: '브랜드',
						contents: '브랜드내용',
					},
					{
						id: 'price',
						title: '가격대',
						contents: '가격대내용',
					},
				],

				chips: [
					'전체보기',
					'카페',
					'편의점',
					'상품권',
					'치킨',
					'컴퓨터',
					'이거',
					'저거',
				],
				productList: [
					{
						product_cd: 'P01',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '25',
						seller_prc: '3375',
						cust_prc: '4000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P02',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '30',
						seller_prc: '7000',
						cust_prc: '10000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P03',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '40',
						seller_prc: '5800',
						cust_prc: '8000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
				],
				productList2: [
					{
						product_cd: 'P01',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '25',
						seller_prc: '3375',
						cust_prc: '4000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P02',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '30',
						seller_prc: '7000',
						cust_prc: '10000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P03',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '40',
						seller_prc: '5800',
						cust_prc: '8000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P01',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '25',
						seller_prc: '3375',
						cust_prc: '4000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P02',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '30',
						seller_prc: '7000',
						cust_prc: '10000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P03',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '40',
						seller_prc: '5800',
						cust_prc: '8000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P01',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '25',
						seller_prc: '3375',
						cust_prc: '4000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P02',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
						disc_rat: '30',
						seller_prc: '7000',
						cust_prc: '10000',
						isWish: false,
						image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
					},
					{
						product_cd: 'P03',
						brand_name: '브랜드',
						title: '발행 상품명 글자수 제한 두 줄로 표시',
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
			wishDoit(item) {
				console.log(`${item} 찜함`);
			},
		},
	};
</script>

<style></style>
