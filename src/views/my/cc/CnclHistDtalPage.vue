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
										<span class="blue--text font-weight-bold ml-3">
											138496
										</span>
									</div>
								</v-list-item-content>
								<v-list-item-content class="pa-0">
									<v-list-item-title class="text-right"
										><span class="caption blue--text font-weight-bold"
											>취소</span
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
				<v-col cols="4" class="font-weight-bold py-1"> 주문일시 </v-col>
				<v-col cols="8" class="py-1"> 2022-05-01 09:30 </v-col>
				<v-col cols="4" class="font-weight-bold py-1"> 발송번호 </v-col>
				<v-col cols="8" class="py-1 blue--text"> 123456 </v-col>
				<v-col cols="4" class="font-weight-bold py-1"> 프로모션 명 </v-col>
				<v-col cols="8" class="py-1"> 프로모션 명 노출</v-col>
				<v-col cols="4" class="font-weight-bold py-1"> 메시지 정보</v-col>
				<v-col cols="8" class="py-1"> 메시지 제목이 노출 </v-col>
				<v-col cols="12 py-1 grey lighten-2">
					<div class="py-2">메시지내용</div>
				</v-col>
				<v-col cols="4" class="font-weight-bold py-1"> 발신자 정보 </v-col>
				<v-col cols="3" class="py-1"> 발신자명 </v-col>
				<v-col cols="5" class="py-1"> 1544-0000</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" class="font-weight-bold"> 쿠폰발급내역 </v-col>
			</v-row>
			<v-row
				justify="space-around"
				style="border-top: 1px solid #ddd"
				class="caption text-center"
			>
				<v-col cols="3" class="px-0"> 전체 </v-col>

				<v-col cols="3" class="px-0"> 성공 </v-col>
				<v-col cols="3" class="px-0"> 실패 </v-col>
				<v-col cols="3" class="px-0"> 취소 </v-col>
			</v-row>
			<v-row
				justify="space-around"
				class="caption text-center"
				style="border-top: 1px solid #ddd"
			>
				<v-col cols="3" class="px-0"> 2 </v-col>
				<v-col cols="3" class="px-0 text-decoration-underline"> 0 </v-col>
				<v-col cols="3" class="px-0 text-decoration-underline"> 0 </v-col>
				<v-col
					cols="3"
					class="px-0 text-decoration-underline font-weight-bold red--text"
				>
					2
				</v-col>
			</v-row>
			<v-row style="border-top: 1px solid #ddd">
				<v-col cols="12" class="py-1" />
			</v-row>
			<v-row>
				<v-col cols="12" class="body-2 py-0">
					발송(예약)일시 : 2022-06-01 09:30
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" class="py-4" />
			</v-row>
			<v-row style="border-top: 1px solid #ddd" class="caption">
				<v-col cols="12" class="font-weight-bold py-2"> 결제취소정보 </v-col>
			</v-row>
			<v-row style="border-top: 1px solid #ddd" class="caption">
				<v-col cols="6" class="text-left py-2"> 결제취소수단 </v-col>
				<v-col cols="6" class="text-right py-2"> 롯데카드 </v-col>
			</v-row>
			<v-row style="border-top: 1px solid #ddd" class="caption">
				<v-col cols="6" class="text-left py-2"> 결제취소일시 </v-col>
				<v-col cols="6" class="text-right py-2"> 2022-05-23 13:59 </v-col>
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
				<v-col cols="6" class="text-right py-2"> 20 </v-col>
			</v-row>

			<v-row
				style="border-top: 1px solid #ddd"
				class="caption font-weight-bold"
			>
				<v-col cols="6" class="text-left py-2"> 최종 결제 금액 </v-col>
				<v-col cols="6" class="text-right py-2 red--text"> 0,000,000원 </v-col>
			</v-row>
			<v-row style="border-top: 1px solid #ddd">
				<v-col cols="12" class="pb-0" />
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
