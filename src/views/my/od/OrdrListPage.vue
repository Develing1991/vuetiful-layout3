<template>
	<v-container class="px-6 mt-3">
		<v-row>
			<v-col cols="12" class="primary lighten-3 caption">
				<ul>
					<li>주문 후 정상 발급된 쿠폰에 대해서는 취소, 환불이 불가합니다.</li>
					<li>
						발급 결과는 수신인의 통신환경에 따라 최대 25시간까지 소요될 수
						있습니다.
					</li>
				</ul>
			</v-col>
		</v-row>

		<v-row class="text-center" justify="space-between">
			<v-col cols="auto" class="px-0">
				<v-card class="py-1 px-2" outlined> 오늘</v-card>
			</v-col>
			<v-col cols="auto" class="px-0">
				<v-card class="py-1 px-2" outlined> 7일</v-card>
			</v-col>
			<v-col cols="auto" class="px-0">
				<v-card class="py-1 px-2" outlined> 30일</v-card>
			</v-col>
			<v-col cols="auto" class="px-0">
				<v-card class="py-1 px-2" outlined> 3개월</v-card>
			</v-col>
			<v-col cols="auto" class="px-0">
				<v-card class="py-1 px-2" outlined> 6개월</v-card>
			</v-col>
			<v-col cols="auto" class="px-0">
				<v-card class="py-1 px-2" outlined> 12개월</v-card>
			</v-col>

			<!-- <v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						오늘
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						7일
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						30일
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						3개월
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						6개월
					</v-btn>
				</v-col>
				<v-col :cols="$vuetify.breakpoint.width < 450 ? 4 : 2" class="px-0">
					<v-btn
						color="primary"
						:large="$vuetify.breakpoint.width < 450"
						class="px-0"
						outlined
					>
						12개월
					</v-btn>
				</v-col> -->
		</v-row>
		<v-row justify="center">
			<v-col cols="5" class="pa-0">
				<v-text-field
					v-model="startDtm"
					placeholder="시작날짜 선택"
					readonly
					outlined
					hide-details
					dense
					@click="openDatePicker('startDtm')"
				/>
			</v-col>
			<v-col cols="2" class="pa-0 text-center mt-2">
				<v-icon>mdi-tilde </v-icon>
			</v-col>
			<v-col cols="5" class="pa-0">
				<v-text-field
					v-model="endDtm"
					placeholder="종료날짜 선택"
					readonly
					outlined
					hide-details
					dense
					@click="openDatePicker('endDtm')"
				/>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" class="px-0">
				<v-text-field
					v-model="searchWord"
					placeholder="프로모션명, 상품명으로 조회할 수 있습니다."
					outlined
					hide-details
					dense
				/>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="6" class="pa-0 pr-1">
				<v-btn color="primary" outlined width="100%">초기화</v-btn>
			</v-col>
			<v-col cols="6" class="pa-0 pl-1">
				<v-btn color="primary" width="100%">조회</v-btn>
			</v-col>
		</v-row>
		<v-divider class="mt-8 mb-5" />
		<v-row justify="space-between">
			<v-col cols="auto" align-self="end" class="caption px-0">
				총 <span class="primary--text font-weight-bold">NNN</span> 개</v-col
			>
			<v-col cols="auto" class="px-0">
				<!-- @click="slideOpen" -->
				<v-btn outlined small tile elevation="0" class="mx-1">전체 ▼ </v-btn>
				<v-btn outlined small tile elevation="0" class="mx-1"
					>주문일 내림차순 ▼
				</v-btn>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12" class="px-0">
				<v-card
					v-for="i in 10"
					:key="i"
					outlined
					tile
					class="my-1"
					@click="$router.push({ name: 'OrdrDtalPage' })"
				>
					<v-list class="pa-0">
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
						<v-list-item class="px-2" dense>
							<v-list-item-avatar tile size="120">
								<v-img
									src="https://thumbnail6.coupangcdn.com/thumbnails/remote/300x300ex/image/product/image/vendoritem/2019/02/11/3186737276/e4f9115d-ff6d-406c-8e9e-52382c5b0abc.jpg"
								/>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-subtitle class="black--text">
									<div class="font-weight-bold body-2">
										<div>프로모션명 노출</div>
										<div>(스타벅스) 기분 좋은 디저트 세트</div>
									</div>
									<div class="my-1">
										<div>발송건수 : 20건</div>
										<div>발송(예약)일시 : 2022-06-01 09:00</div>
									</div>
									<div class="font-weight-bold body-2">
										<div>100,000원</div>
									</div>
								</v-list-item-subtitle>
								<v-list-item-subtitle />
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-card>

				<!-- <v-card
						outlined
						tile
						class="my-1"
						@click="$router.push({ name: 'OrdrDtalPage' })"
					>
						<v-list class="pa-0">
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
							<v-list-item>
								<v-row class="pa-2">
									<v-col cols="4" class="pa-0">
										<v-avatar tile color="grey" size="90%" />
									</v-col>
									<v-col cols="8" class="body-2">
										<div class="font-weight-bold">
											<div>프로모션명 노출</div>
											<div>(스타벅스) 기분 좋은 디저트 세트</div>
										</div>

										<div>발송건수 : 20건</div>
										<div>발송(예약)일시 : 2022-06-01 09:00</div>
										<div class="font-weight-bold">100,000원</div>
									</v-col>
								</v-row>
							</v-list-item>
						</v-list>
					</v-card> -->
			</v-col>
		</v-row>
		<DatePicker :show="datePickerShow" :gbn="gbn" @selectDate="selectDate" />
	</v-container>
</template>

<script>
	import DatePicker from '@/components/pop/DatePicker.vue';
	export default {
		components: {
			DatePicker,
		},
		data() {
			return {
				startDtm: null,
				endDtm: null,
				datePickerShow: false,
				gbn: null,
				searchWord: null,
			};
		},
		methods: {
			selectDate(item) {
				this[item.gbn] = item.date;
				this.datePickerShow = false;
			},
			openDatePicker(gbn) {
				this.datePickerShow = true;
				this.gbn = gbn;
			},
		},
	};
</script>

<style></style>
