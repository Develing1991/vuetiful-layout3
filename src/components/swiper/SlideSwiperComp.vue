<template>
	<!-- 현재 이거 사용안함.. 일단 예시로 냅둠 -->
	<swiper class="swiper" :options="swiperOption">
		<!-- <swiper-slide>Slide 1</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<swiper-slide>Slide 3</swiper-slide>
		<swiper-slide>Slide 4</swiper-slide>
		<swiper-slide>Slide 5</swiper-slide> -->
		<slot></slot>
		<div slot="pagination" class="swiper-pagination"></div>
	</swiper>
</template>

<script>
	//import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import { Swiper } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';

	export default {
		name: 'SwiperExamplePagination',
		title: 'Pagination',
		components: {
			Swiper,
			//SwiperSlide,
		},
		data() {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
					},
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/styles/swiper_base.scss';
</style>
