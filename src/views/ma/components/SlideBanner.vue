<template>
	<div>
		<div v-if="useTitle" style="text-align: center" class="my-5 mx-3">
			<div class="font-weight-bold" style="font-size: 20px">{{ title }}</div>
			<div style="font-size: 12px">{{ subTitle }}</div>
		</div>
		<swiper
			class="swiper"
			:options="swiperOption"
			:style="`height:${height}px;`"
		>
			<!-- <swiper-slide>Slide 1</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<swiper-slide>Slide 3</swiper-slide>
		<swiper-slide>Slide 4</swiper-slide>
		<swiper-slide>Slide 5</swiper-slide> -->
			<slot></slot>
			<div slot="pagination" :page="page" class="swiper-pagination"></div>
		</swiper>
	</div>
</template>

<script>
	//import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import { Swiper } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';

	export default {
		components: {
			Swiper,
			//SwiperSlide,
		},
		// name: 'SwiperExamplePagination',
		// title: 'Pagination',
		props: {
			options: {
				type: Object,
				default: () => ({
					pagination: {
						el: '.swiper-pagination',
					},
				}),
			},
			height: {
				type: String,
				default: '250',
			},
			page: {
				type: Boolean,
				default: true,
			},
			useTitle: {
				type: Boolean,
				default: false,
			},
			title: {
				type: String,
				default: '',
			},
			subTitle: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				swiperOption: this.options,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/styles/swiper_base.scss';
</style>
