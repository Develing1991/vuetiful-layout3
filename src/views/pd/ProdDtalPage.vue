<template>
	<div>
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
					배너이미지
				</div>
			</SwiperSlide>
		</SlideBanner>
		<v-container>
			<v-row>
				<v-col cols="12">
					<div class="caption grey--text">[브랜드명]</div>
					<div class="font-weight-bold">
						발행 상품명 노출 두 줄까지 노출할까요 발행 상품ㅁ명 노출 두 줄가지
						노출할까요
					</div>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<div class="text-h4 font-weight-bold primary--text mt-3">3,380원</div>
				</v-col>
				<v-col cols="6" class="text-right">
					<div class="mt-5">
						<span class="text-h6 font-weight-bold red--text mx-2">25%</span>
						<span class="body-2 text-decoration-line-through grey--text"
							>4,500원</span
						>
					</div>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<v-btn outlined color="primary" width="100%">
						<div class="black--text">찜하기</div>
						<v-icon class="red--text">mdi-heart</v-icon>
					</v-btn>
				</v-col>
				<v-col cols="6">
					<v-btn
						color="primary"
						width="100%"
						@click="$router.push({ name: 'OrdrProdPage' })"
					>
						바로구매
					</v-btn>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<v-list-item class="primary lighten-3 pa-2 body-2">
						<v-list-item-content>
							<ul>
								<li class="my-1">상품코드</li>
								<li class="my-1">교환처</li>
								<li class="my-1">유효기간</li>
							</ul>
						</v-list-item-content>
						<v-list-item-content class="font-weight-bold">
							<div class="my-1">0000000</div>
							<div class="my-1">교환처명</div>
							<div class="my-1">90일</div>
						</v-list-item-content>
						<v-spacer />
					</v-list-item>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" class="font-weight-bold">
					상품상세정보 및 유의사항
				</v-col>
			</v-row>
		</v-container>
		<v-divider />
		<v-container>
			<v-row>
				<v-col cols="12" class="caption">
					<div class="my-3">
						<div class="font-weight-bold">이용조건</div>
						<div>- 상기 이미지는 연출된 것으로 실제와 다를 수 있습니다.</div>
						<div>
							- 본 상품은 매장별 수급상황에 따라 재고가 없을 수 있습니다.
						</div>
					</div>
					<div class="my-3">
						<div class="font-weight-bold">이용 가능 매장 / 교환 방법</div>
						<div>
							스타벅스 전 매장(일부 제외 :용산미8군점, 용산타운하우스점,
							오산에어베이스점, 평택험프리점, 평택험프리 트룹몰점, 평택험프리
							메인몰점, 대구캠프워커점, 군산에어베이스점, 캠프캐롤점,
							캠프케이시점, 오션월드점, 오션월드입구점, 설악워터피아점 등
							일부매장 사용 불가)
						</div>
						<div class="mt-3">
							* 지급보증 : 본 상품은 별도의 지급보증 및 피해보상 보험계약체결
							없이 자체 신용으로 발행되었습니다
						</div>
						<div>추가안내문구</div>
						<div class="my-3">* 문의처 : 02-571-5507</div>
					</div>
				</v-col>
			</v-row>
		</v-container>
		<v-divider />
		<DefaultRsltPage title="이 브랜드 인기상품" />
		<v-container>
			<v-row>
				<v-col cols="12" />
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import SlideBanner from '@/views/pd/components/SlideBanner.vue';
	import { SwiperSlide } from 'vue-awesome-swiper';
	import DefaultRsltPage from '@/views/no/DefaultRsltPage.vue';
	export default {
		components: {
			SlideBanner,
			SwiperSlide,
			DefaultRsltPage,
		},
	};
</script>

<style></style>
