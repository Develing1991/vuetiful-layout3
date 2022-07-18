<template>
	<div>
		<SlideBanner>
			<swiper-slide>Slide 1</swiper-slide>
			<swiper-slide>Slide 2</swiper-slide>
			<swiper-slide>Slide 3</swiper-slide>
			<swiper-slide>Slide 4</swiper-slide>
			<swiper-slide>Slide 5</swiper-slide>
		</SlideBanner>
		<!-- content, height, pagination, options -->
		<v-divider />
		<SelectBanner />
		<v-divider />
		<SlideBanner
			height="250"
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
			<swiper-slide v-for="i in 10" :key="i"
				><v-card tile>
					<v-img
						src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
						class="white--text align-end ma-2"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="100px"
					>
						<v-card-title v-text="'gd'" />
					</v-img>
					<v-card-subtitle class="px-2 py-0 ma-0" style="font-size: 12px">
						[브랜드명]
					</v-card-subtitle>
					<v-card-title
						class="px-2 py-0 ma-0"
						style="font-size: 12px; line-height: 20px"
					>
						발행 상품명 글자수 제한 두 줄로 표시
					</v-card-title>

					<v-card-actions class="py-0">
						<div>
							<div>3,375원</div>
							<div style="font-size: 12px">4,000원</div>
						</div>
						<v-spacer />
						<v-btn icon>
							<v-icon>mdi-heart-outline</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card></swiper-slide
			>
		</SlideBanner>
		<v-divider />
	</div>
</template>

<script>
	import SlideBanner from '@/views/ma/components/SlideBanner.vue';
	import SelectBanner from '@/views/ma/components/SelectBanner.vue';
	import { SwiperSlide } from 'vue-awesome-swiper';
	export default {
		components: {
			SlideBanner,
			SelectBanner,
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
			};
		},
	};
</script>

<style></style>
