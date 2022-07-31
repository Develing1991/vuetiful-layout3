<template>
	<div>
		<v-container class="px-0">
			<v-list class="mb-2 py-0" dense>
				<v-list-item ripple @click="$router.push({ name: 'CnfmPassPage' })">
					<v-list-item-content>
						<v-list-item-title class="primary--text font-weight-bold"
							>아이디</v-list-item-title
						>
					</v-list-item-content>
					<v-list-item-content>
						<v-list-item-title class="text-right"
							>개인정보수정
							<v-icon class="pb-1">mdi-chevron-right</v-icon>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider />

				<v-list-item class="my-3">
					<v-list-item-content class="pb-0">
						<v-list-item-title class="font-weight-bold mb-2"
							>주문 현황 (최근 3개월)
							<v-menu
								v-model="menu"
								:close-on-content-click="false"
								:nudge-width="200"
								left
							>
								<template v-slot:activator="{ on, attrs }">
									<!-- <div v-bind="attrs" v-on="on">ggd</div> -->
									<v-btn
										color="primary lighten-3 float-right"
										x-small
										v-bind="attrs"
										fab
										elevation="0"
										v-on="on"
									>
										<div
											class="primary--text font-weight-bold darken-3 subtitle-2"
										>
											?
										</div>
									</v-btn>
								</template>

								<v-card class="pa-3 caption" elevation="0" tile width="300">
									<v-card-title class="body-2 font-weight-bold pa-0">
										주문 상태 안내
									</v-card-title>
									<ul>
										<li>성공 : 쿠폰 발급이 모두 완료된 주문</li>
										<li>
											부분성공 : 여러명의 수신자 중 성공과 실패가 함께 있는 주문
										</li>
										<li>처리중 : 발송 진행 중인 건이 있는 주문</li>
										<li>준비 : 예약 발송 건이 있는 주문</li>
										<li>실패 : 쿠폰 발급이 모두 실패한 주문</li>
										<li>취소 : 취소 처리한 주문</li>
									</ul>
								</v-card>
							</v-menu>
						</v-list-item-title>
						<v-card tile class="caption">
							<v-row>
								<v-col cols="4" class="px-0 pb-0">
									<v-btn
										width="100%"
										tile
										elevation="0"
										style="border-right: 1px solid #ddd"
										x-large
									>
										<v-avatar
											size="40"
											color="primary lighten-3"
											class="caption"
										>
											성공
										</v-avatar>
										<span class="ml-3">20</span>
									</v-btn>
								</v-col>
								<v-col cols="4" class="px-0 pb-0">
									<v-btn width="100%" tile elevation="0" x-large>
										<v-avatar
											size="40"
											color="primary lighten-3"
											class="caption"
										>
											<div>부분<br />성공</div>
										</v-avatar>
										<span class="ml-3">2</span>
									</v-btn>
								</v-col>
								<v-col cols="4" class="px-0 pb-0">
									<v-btn
										width="100%"
										tile
										elevation="0"
										style="border-left: 1px solid #ddd"
										x-large
									>
										<v-avatar
											size="40"
											color="primary lighten-3"
											class="caption"
										>
											처리중
										</v-avatar>
										<span class="ml-3">1</span>
									</v-btn>
								</v-col>
							</v-row>
							<v-row>
								<v-col cols="4" class="px-0 pt-0">
									<v-btn
										width="100%"
										tile
										elevation="0"
										style="
											border-right: 1px solid #ddd;
											border-top: 1px solid #ddd;
										"
										x-large
									>
										<v-avatar
											size="40"
											color="primary lighten-3"
											class="caption"
										>
											준비
										</v-avatar>
										<span class="ml-3">1</span>
									</v-btn>
								</v-col>
								<v-col cols="4" class="px-0 pt-0">
									<v-btn
										width="100%"
										tile
										elevation="0"
										x-large
										style="border-top: 1px solid #ddd"
									>
										<v-avatar
											size="40"
											color="primary lighten-3"
											class="caption"
										>
											실패
										</v-avatar>
										<span class="ml-3">0</span>
									</v-btn>
								</v-col>
								<v-col cols="4" class="px-0 pt-0">
									<v-btn
										width="100%"
										tile
										elevation="0"
										style="
											border-left: 1px solid #ddd;
											border-top: 1px solid #ddd;
										"
										x-large
									>
										<v-avatar
											size="40"
											color="primary lighten-3"
											class="caption"
										>
											취소
										</v-avatar>
										<span class="ml-3">3</span>
									</v-btn>
								</v-col>
							</v-row>
						</v-card>
					</v-list-item-content>
				</v-list-item>
				<v-divider />

				<v-list-item ripple @click="$router.push({ name: 'OrdrListPage' })">
					<v-list-item-content>
						<v-list-item-title class="font-weight-bold"
							>주문/발급 내역</v-list-item-title
						>
					</v-list-item-content>
					<v-list-item-content>
						<v-list-item-title class="text-right">
							<v-icon class="pb-1">mdi-chevron-right</v-icon>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider />
				<v-list-item ripple @click="$router.push({ name: 'CnclHistListPage' })">
					<v-list-item-content>
						<v-list-item-title class="font-weight-bold"
							>취소/환불 내역</v-list-item-title
						>
					</v-list-item-content>
					<v-list-item-content>
						<v-list-item-title class="text-right">
							<v-icon class="pb-1">mdi-chevron-right</v-icon>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider />
				<v-list-item ripple @click="$router.push({ name: 'WishListPage' })">
					<v-list-item-content>
						<v-list-item-title class="font-weight-bold"
							>찜목록</v-list-item-title
						>
					</v-list-item-content>
					<v-list-item-content>
						<v-list-item-title class="text-right">
							<v-icon class="pb-1">mdi-chevron-right</v-icon>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider />
				<v-list-item ripple @click="$router.push({ name: 'SendMsgMgmtPage' })">
					<v-list-item-content>
						<v-list-item-title class="font-weight-bold"
							>메시지관리</v-list-item-title
						>
					</v-list-item-content>
					<v-list-item-content>
						<v-list-item-title class="text-right">
							<v-icon class="pb-1">mdi-chevron-right</v-icon>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider />
				<v-list-item ripple @click="$router.push({ name: 'SendMbleMgmtPage' })">
					<v-list-item-content>
						<v-list-item-title class="font-weight-bold"
							>발신번호관리</v-list-item-title
						>
					</v-list-item-content>
					<v-list-item-content>
						<v-list-item-title class="text-right">
							<v-icon class="pb-1">mdi-chevron-right</v-icon>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider />
				<v-list-item class="mt-4">
					<v-list-item-content>
						<!-- <v-list-item-title class="font-weight-bold"
							>발신번호관리</v-list-item-title
						> -->
						<v-btn width="80%" class="primary mx-auto"> 로그아웃 </v-btn>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menu: false,
			};
		},
	};
</script>

<style></style>
