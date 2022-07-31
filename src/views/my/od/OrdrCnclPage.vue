<template>
	<div>
		<v-container class="px-6">
			<v-row>
				<v-col cols="12" class="px-0">
					<v-card outlined tile class="my-1">
						<v-list class="pa-0" dense>
							<v-list-item class="px-2" dense>
								<v-list-item-content class="pa-0">
									<div class="caption">
										2022-05-23
										<span class="primary--text font-weight-bold ml-3">
											138496
										</span>
									</div>
								</v-list-item-content>
								<v-list-item-content class="pa-0">
									<v-list-item-title class="text-right"
										><span class="caption primary--text font-weight-bold"
											>준비</span
										>
										<v-icon class="pb-1">mdi-chevron-right</v-icon>
									</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
							<v-list-item class="px-2" dense three-line>
								<v-list-item-avatar tile size="120">
									<v-img
										src="https://thumbnail6.coupangcdn.com/thumbnails/remote/300x300ex/image/product/image/vendoritem/2019/02/11/3186737276/e4f9115d-ff6d-406c-8e9e-52382c5b0abc.jpg"
									/>
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-subtitle
										class="grey--text font-weight-bold mb-1 text-caption"
									>
										[브랜드명]
									</v-list-item-subtitle>
									<v-list-item-subtitle class="font-weight-bold my-2 body-2">
										발행 상품명 글자수 제한 한줄로 표시
										가나다라마바아사아자차카타파하
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										<span
											class="font-weight-bold red--text"
											style="font-size: 17px"
											>5,500원</span
										>
										<span class="float-right">
											<span class="font-weight-bold subtitle-2 red--text"
												>45%</span
											>
											<span
												class="text-caption text-decoration-line-through ml-2 grey--text"
											>
												10,000원
											</span>
										</span>
									</v-list-item-subtitle>
									<v-list-item-subtitle />
								</v-list-item-content>
							</v-list-item>
						</v-list>
						<v-card-text class="text--primary pt-0">
							<v-list-item class="primary lighten-3 px-2 pb-2 body-2">
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
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row class="body-2">
				<v-col cols="4" class="font-weight-bold py-1"> 프로모션 명 </v-col>
				<v-col cols="8" class="py-1"> 프로모션명 노출 </v-col>
				<v-col cols="4" class="font-weight-bold py-1"> 쿠폰 발급 신청 </v-col>
				<v-col cols="8" class="py-1"> 20건 </v-col>
				<v-col cols="4" class="font-weight-bold py-1"> 발송(예약)일시 </v-col>
				<v-col cols="8" class="py-1"> 2022-06-01 09:30 </v-col>
			</v-row>

			<v-row>
				<v-col cols="12" />
			</v-row>
			<v-row style="border-top: 1px solid #ddd" class="caption">
				<v-col cols="12" class="font-weight-bold py-2"> 결제취소정보 </v-col>
			</v-row>
			<v-row style="border-top: 1px solid #ddd" class="caption">
				<v-col cols="6" class="text-left py-2"> 결제취소수단 </v-col>
				<v-col cols="6" class="text-right py-2"> 롯데카드 </v-col>
			</v-row>
			<v-row style="border-top: 1px solid #ddd" class="caption">
				<v-col cols="6" class="text-left py-2"> 상품 가격 </v-col>
				<v-col cols="6" class="text-right py-2"> 4,000원 </v-col>
			</v-row>
			<v-row style="border-top: 1px solid #ddd" class="caption">
				<v-col cols="6" class="text-left py-2"> 할인 가격 </v-col>
				<v-col cols="6" class="text-right py-2"> 3,375원 </v-col>
			</v-row>
			<v-row style="border-top: 1px solid #ddd" class="caption">
				<v-col cols="6" class="text-left py-2"> 취소 수량 </v-col>
				<v-col cols="6" class="text-right py-2"> 2 </v-col>
			</v-row>

			<v-row
				style="border-top: 1px solid #ddd"
				class="caption font-weight-bold"
			>
				<v-col cols="6" class="text-left py-2"> 취소 예정 금액 </v-col>
				<v-col cols="6" class="text-right py-2 red--text"> 0,000,000원 </v-col>
			</v-row>
			<v-row style="border-top: 1px solid #ddd">
				<v-col cols="12" class="pb-0" />
			</v-row>
			<v-row>
				<v-col cols="12" class="text-center caption">
					취소/환불 내역은 마이페이지 > 취소/환불 내역에서 확인할 수 있습니다.
				</v-col>
			</v-row>
			<v-row class="mb-1">
				<v-col cols="6" class="px-0 pr-1">
					<v-btn color="primary" outlined width="100%" @click="$router.go(-1)"
						>주문상세보기</v-btn
					>
				</v-col>
				<v-col cols="6" class="px-0 pl-1">
					<v-btn color="primary" width="100%">결제취소하기</v-btn>
				</v-col>
			</v-row>
		</v-container>

		<BottomSlidePage
			:dialog="dialog"
			:title="trmsTitle"
			@close="dialog = false"
		>
			<div v-show="openList['preView']">
				<div class="text-center py-4">
					<img alt="Vue logo" src="~@/assets/images/preView.jpg" />
					<div><v-btn outlined @click="dialog = false">닫기</v-btn></div>
				</div>
			</div>

			<div v-show="openList['recvrList']">
				<RcvrMbleList />
			</div>
		</BottomSlidePage>
	</div>
</template>

<script>
	import BottomSlidePage from '@/components/pop/BottomSlidePage.vue';
	import RcvrMbleList from '@/views/my/od/components/RcvrMbleList';

	export default {
		components: {
			BottomSlidePage,
			RcvrMbleList,
		},
		data() {
			return {
				dialog: false,
				trmsTitle: '',
				openList: {
					preView: false,
					recvrList: false,
				},
				ishwanbul: true,
			};
		},
		methods: {
			openBottomModal(title, subject) {
				this.dialog = true;
				this.trmsTitle = title;
				this.initOpenList();
				this.openList[subject] = true;
			},
			initOpenList() {
				for (let key in this.openList) {
					this.openList[key] = false;
				}
			},
		},
	};
</script>

<style></style>
