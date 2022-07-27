<template>
	<div>
		<ValidationObserver ref="observer">
			<form @submit.prevent="authNumSubmit">
				<v-container>
					<v-row>
						<v-col cols="12">
							<div class="font-weight-bold body-2 my-2">프로모션 명</div>
							<ValidationProvider
								v-slot="{ errors }"
								name="프로모션 명"
								:rules="{
									required: true,
									check_byte: byte_valid && limit_byte,
								}"
							>
								<v-text-field
									v-model="promotion"
									color="primary"
									placeholder="발송 관리를 위해 프로모션명을 입력해주세요"
									outlined
									dense
									counter
									:counter-value="() => `${promotion_byte} / 50`"
									:error-messages="`${errors}`"
									@keyup="byteLengthOracle(50, $event, 'promotion_byte')"
								/>
							</ValidationProvider>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6">
							<v-btn class="primary" width="100%"> 추천 메시지 선택하기 </v-btn>
						</v-col>
						<v-col cols="6">
							<v-btn class="primary" width="100%"> 나의 메시지 불러오기 </v-btn>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12">
							<div class="font-weight-bold body-2 my-2">메시지 정보</div>
							<ValidationProvider
								v-slot="{ errors }"
								name="메시지 제목"
								:rules="{
									required: true,
									check_byte: byte_valid && limit_byte,
								}"
							>
								<v-text-field
									v-model="msg_title"
									color="primary"
									placeholder="메시지 제목을 입력해주세요"
									outlined
									dense
									counter
									:counter-value="() => `${msg_title_byte} / 80`"
									:error-messages="`${errors}`"
									@keyup="byteLengthOracle(80, $event, 'msg_title_byte')"
								/>
							</ValidationProvider>
							<ValidationProvider
								v-slot="{ errors }"
								name="메시지 내용"
								:rules="{
									required: true,
									check_byte: byte_valid && limit_byte,
								}"
							>
								<v-textarea
									v-model="msg_contents"
									color="primary"
									placeholder="메시지 내용을 입력해주세요"
									outlined
									dense
									counter
									:counter-value="() => `${msg_contents_byte} / 400`"
									:error-messages="`${errors}`"
									rows="5"
									row-height="30"
									no-resize
									@keyup="byteLengthOracle(400, $event, 'msg_contents_byte')"
								/>
							</ValidationProvider>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6">
							<!-- <v-btn class="primary" tile elevation="0" width="100%">
								추천 메시지 선택하기
							</v-btn> -->
							<v-checkbox class="mt-0" label="발송 메시지 저장" />
						</v-col>

						<v-col cols="6" class="text-right">
							<v-btn class="primary" width="80%" small> 미리보기 </v-btn>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" class="py-0">
							<div class="font-weight-bold body-2 my-2">발송 시간</div>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6">
							<v-btn class="primary" width="100%" @click="setDate('now')">
								즉시발송
							</v-btn>
						</v-col>
						<v-col cols="6">
							<v-btn
								color="primary"
								outlined
								width="100%"
								@click="showDatePicker = true"
							>
								예약발송
							</v-btn>
						</v-col>
					</v-row>

					<v-row>
						<v-col cols="12">
							<v-list-item class="primary lighten-3 pa-0 body-2">
								<v-list-item-content class="mx-2 caption">
									{{ reserveDate }}
								</v-list-item-content>
							</v-list-item>
						</v-col>
					</v-row>

					<v-row>
						<v-col cols="6" class="pb-0">
							<div class="font-weight-bold body-2 my-2">발신 정보</div>
						</v-col>
						<v-col cols="6" class="text-right pb-0">
							<v-btn class="primary" width="80%" small>
								발신번호 불러오기
							</v-btn>
						</v-col>
						<v-col cols="12" class="pb-0">
							<ValidationProvider
								v-slot="{ errors }"
								name="발신자명"
								:rules="{
									required: true,
								}"
							>
								<v-text-field
									v-model="sender_name"
									color="primary"
									placeholder="발신자명(30자 이내)"
									outlined
									dense
									:error-messages="`${errors}`"
								/>
							</ValidationProvider>
						</v-col>
						<v-col cols="11" class="pt-0">
							<ValidationProvider
								v-slot="{ errors }"
								name="발신번호"
								:rules="{
									required: true,
								}"
							>
								<v-text-field
									v-model="sender_phone"
									color="primary"
									placeholder="발신번호를 입력해주세요"
									outlined
									dense
									:error-messages="`${errors}`"
								/>
							</ValidationProvider>
						</v-col>
						<v-col cols="1" class="pt-0">
							<div class="text-left">
								<v-menu
									v-model="menu"
									:close-on-content-click="false"
									:nudge-width="200"
									left
								>
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											color="primary lighten-3"
											small
											v-bind="attrs"
											fab
											elevation="0"
											v-on="on"
										>
											<div class="primary--text">?</div>
										</v-btn>
									</template>

									<v-card class="pa-3 caption" elevation="0" tile width="300">
										<v-card-title class="body-2 font-weight-bold pa-0">
											발신번호 입력 안내
										</v-card-title>
										<ul>
											<li>발신자명은 수신자에게 표시되지않습니다.</li>
											<li>
												번호도용 차단서비스에 가입된 휴대폰번호인 경우 발신에
												실패할 수 있습니다.
											</li>
											<li>
												발신번호가 올바르지 않으면 발신 실패합니다.
												<div>- 유선번호는 지역번호를 포함하여 기입</div>
												<div>- 전국대표번호는 지역번호 없이 기입</div>
											</li>
										</ul>
									</v-card>
								</v-menu>
							</div>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12">
							<v-checkbox class="mt-0" label="발신 번호 저장" />
						</v-col>
					</v-row>
					<v-divider />
					<v-row>
						<v-col cols="12">
							<div class="font-weight-bold body-2 my-2">수신자 정보</div>
						</v-col>
						<!-- <v-col cols="2">
							<v-textarea
								id="grid1"
								ref="recvr_scroll1"
								v-model="recvr_phone_number"
								color="primary"
								outlined
								dense
								rows="5"
								row-height="30"
								no-resize
								readonly
							/>
						</v-col>

						<v-col cols="10" class="pl-0">
							<ValidationProvider
								v-slot="{ errors }"
								name="수신자 번호"
								:rules="{
									required: true,
								}"
							>
								<v-textarea
									id="grid2"
									ref="recvr_scroll2"
									v-model="recvr_phone"
									color="primary"
									placeholder="숫자만 엔터를 이용해 입력해주세요.
ex)01022223333"
									outlined
									dense
									:error-messages="`${errors}`"
									rows="5"
									row-height="30"
									no-resize
									@keyup="makeLineNumber"
								/>
							</ValidationProvider>
						</v-col> -->
						<v-col cols="12">
							<ValidationProvider
								v-slot="{ errors }"
								name="수신자 번호"
								:rules="{
									required: true,
								}"
							>
								<v-textarea
									id="grid2"
									ref="recvr_scroll2"
									v-model="recvr_phone"
									color="primary"
									placeholder="숫자만 엔터를 이용해 입력해주세요.
ex)01022223333"
									outlined
									dense
									:error-messages="`${errors}`"
									rows="5"
									row-height="30"
									no-resize
								/>
							</ValidationProvider>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6">
							<v-btn color="primary" outlined width="100%"> 초기화 </v-btn>
						</v-col>
						<v-col cols="6">
							<v-btn class="primary" width="100%"> 번호검사 </v-btn>
						</v-col>
						<v-col cols="12">
							<div class="grey--text caption">
								<div>※ 번호검사 후 성공한 번호만 발송됩니다.</div>
								<div>
									※ 수신자 중복 입력 시 해당수신자에게 상품이 중복 건수 만큼
									발송 됩니다. 중복 발송은 5건까지 가능합니다.
								</div>
								<div>※ 발신번호와 동일한 번호는 설정할 수 없습니다.</div>
								<div>
									※ 최대 1000명까지 발송 가능합니다. 100명 이상은 엑셀 업로드를
									권장합니다. (.XLS,.XLSX)
								</div>
							</div>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6">
							<v-btn class="primary" width="100%" @click="showSlide = true">
								수신자 엑셀 업로드
							</v-btn>
						</v-col>
						<v-col cols="6">
							<v-btn color="primary" outlined width="100%">
								엑셀양식다운로드
							</v-btn>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12">
							<div class="font-weight-bold body-2 my-2">
								발송 가능 수신자 6명
							</div>
							<div class="caption">
								(검사결과 : 성공 6건 | 실패 2건 | 중복 1건)
							</div>
						</v-col>
						<v-col cols="12">
							<div class="caption font-weight-bold">실패목록</div>
							<v-textarea
								v-model="recvr_phone"
								color="primary"
								outlined
								dense
								rows="4"
								row-height="25"
								no-resize
								readonly
								hide-details
							/>
						</v-col>
						<v-col cols="12">
							<div class="caption font-weight-bold">중복번호</div>
							<v-textarea
								v-model="recvr_phone"
								color="primary"
								outlined
								dense
								rows="4"
								row-height="25"
								no-resize
								readonly
								hide-details
							/>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12">
							<div class="font-weight-bold body-2 my-2">주문상품</div>
						</v-col>
						<v-col>
							<v-card outlined>
								<v-list three-line>
									<v-list-item>
										<v-list-item-avatar tile size="90" color="grey">
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
											<v-list-item-subtitle
												class="font-weight-bold my-2 body-2"
											>
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

								<v-card-text class="text--primary">
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
								</v-card-text>
							</v-card>
						</v-col>
					</v-row>
					<v-divider class="mt-4" />
					<v-row class="my-1">
						<v-col cols="12">
							<div class="font-weight-bold body-2">
								결제수단
								<span class="grey--text ml-5">신용카드</span>
							</div>
						</v-col>
					</v-row>
					<v-divider />
					<v-row class="mt-1">
						<v-col cols="6" class="pb-0">
							<div class="font-weight-bold body-2">약관 동의</div>
						</v-col>
						<v-col cols="6" class="text-right pb-0">
							<v-checkbox
								class="mt-0 d-inline-block"
								label="본 약정서에 동의합니다."
							/>
						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="12">
							<v-expansion-panels accordion tile>
								<v-expansion-panel>
									<v-expansion-panel-header color="grey lighten-3"
										>구매약정서</v-expansion-panel-header
									>
									<v-expansion-panel-content color="grey lighten-3">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-col>
					</v-row>
					<v-row class="mt-5">
						<v-col cols="12" class="pb-0">
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
					<v-row>
						<v-col cols="12">
							<v-btn
								class="primary"
								large
								width="100%"
								@click="$router.push({ name: 'OrdrProdRsltPage' })"
								>결제하기</v-btn
							>
						</v-col>
					</v-row>
				</v-container>
			</form>
		</ValidationObserver>
		<DatePicker :show="showDatePicker" @pickerClose="setDate" />
		<BottomSlideModal :show-slide="showSlide" @close="showSlide = false">
			<v-sheet>
				<div class="px-6 py-3">
					<v-list outlined>
						<v-list-item>
							<v-list-item-content class="pa-0">
								<v-list-item-title
									class="font-weight-bold blue--text mb-2 text-center"
									@click="showSlide = false"
									>파일선택</v-list-item-title
								>
							</v-list-item-content>
						</v-list-item>
						<v-divider />
						<v-list-item>
							<v-list-item-content class="pa-0">
								<v-list-item-title
									class="font-weight-bold blue--text mb-2 text-center"
									@click="showSlide = false"
									>취소</v-list-item-title
								>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</div>
			</v-sheet>
		</BottomSlideModal>
	</div>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	import DatePicker from '@/components/pop/DatePicker.vue';
	import { format } from 'date-fns';
	import { ko } from 'date-fns/locale';
	import BottomSlideModal from '@/components/pop/BottomSlideModal.vue';
	export default {
		components: {
			DatePicker,
			BottomSlideModal,
		},
		mixins: [VeeValidation],
		data() {
			return {
				menu: false,
				showSlide: false,
				//
				showDatePicker: false,
				promotion: '',
				byte_valid: false,
				text_byte: 0,
				limit_byte: 0,
				msg_title: '',
				msg_contents: '',
				promotion_byte: 0,
				msg_title_byte: 0,
				msg_contents_byte: 0,
				reserveDate: null,
				sender_name: null,
				sender_phone: null,
				recvr_phone: null,
				//recvr_phone_number: '',
			};
		},
		mounted() {
			//숫자 보류
			// document.getElementById('grid1').addEventListener('scroll', function () {
			// 	document.getElementById('grid2').scrollTop = this.scrollTop;
			// });
			// document.getElementById('grid2').addEventListener('scroll', function () {
			// 	document.getElementById('grid1').scrollTop = this.scrollTop;
			// });
		},
		methods: {
			byteLengthOracle(limit_byte, event, target) {
				let value = event.target.value;
				let byte = 0;
				for (let i = 0; i < value.length; i++) {
					if (value.charCodeAt(i) > 127) {
						byte += 3;
					} else {
						byte++;
					}
				}
				//return byte;
				this.byte_valid = false;
				//this.text_byte = byte;

				this[target] = byte;

				this.limit_byte = limit_byte;
				if (byte > limit_byte) {
					this.byte_valid = true;
				}
			},
			submit() {
				this.$refs.observer.validate();
			},
			clear() {
				this.value = '';
				this.$refs.observer.reset();
			},
			setDate(date) {
				let settingsDate;
				if (date === 'now') {
					settingsDate = new Date();
				} else {
					this.showDatePicker = false;
					const time = date.selectTime.split(':')[0];
					const minutes = date.selectTime.split(':')[1];
					settingsDate = new Date(date.selectDate);
					settingsDate.setHours(time);
					settingsDate.setMinutes(minutes);
				}
				this.reserveDate = format(settingsDate, 'yyyy-MM-dd HH:mm:ss EEEE', {
					locale: ko,
				});
			},
			// 숫자는 꼭 필요한지... 보류
			// makeLineNumber() {
			// 	const recvr_phone_list = this.recvr_phone.split('\n');
			// 	console.log(recvr_phone_list);
			// 	this.recvr_phone_number = '';
			// 	for (let index = 1; index <= recvr_phone_list.length; index++) {
			// 		this.recvr_phone_number = this.recvr_phone_number + `${index}\n`;
			// 	}
			// },
		},
	};
</script>

<style></style>
