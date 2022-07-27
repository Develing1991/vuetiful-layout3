<template>
	<v-container class="mt-4 px-5">
		<v-row>
			<v-col cols="12" class="text-center">
				<v-avatar color="primary" size="128">
					<v-icon size="96" dark>mdi-receipt-text-check-outline </v-icon>
				</v-avatar>
				<div class="text-h6 font-weight-bold my-4">
					주문이 <span class="primary--text">완료</span>되었습니다.
				</div>
				<div class="body-2 my-4 text-left">
					<ul>
						<li>발급번호 : 138496</li>
						<li>프로모션명 : 테스트프로모션</li>
						<li>
							발급 상태는
							<span class="primary--text">마이페이지 > 주문/발급내역</span>
							에서 확인 가능합니다.
						</li>
					</ul>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" class="py-0">
				<v-divider class="my-2" />
				<div class="font-weight-bold body-2">결제 정보</div>
				<v-divider class="my-2" />
			</v-col>

			<v-col cols="12" class="py-0">
				<v-list-item class="body-2">
					<v-list-item-content>
						<ul>
							<div class="my-2">상품 가격</div>
							<div class="my-2">할인 가격</div>
							<div class="my-2">발송 수량</div>
						</ul>
					</v-list-item-content>
					<v-spacer />
					<v-list-item-content>
						<div class="my-2">4,000원</div>
						<div class="my-2">3,375원</div>
						<div class="my-2">3</div>
					</v-list-item-content>
				</v-list-item>
				<v-divider />
				<v-list-item class="body-2">
					<v-list-item-content>
						<ul>
							<div class="my-2">결제금액</div>
						</ul>
					</v-list-item-content>
					<v-spacer />
					<v-list-item-content class="font-weight-bold text-h6 red--text">
						<div class="my-2">10,125원</div>
					</v-list-item-content>
				</v-list-item>
				<v-divider class="my-2" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'SuIndexPage',
	};
</script>

<style></style>
