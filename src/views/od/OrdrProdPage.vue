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
							<v-btn class="primary" tile elevation="0" width="100%">
								추천 메시지 선택하기
							</v-btn>
						</v-col>
						<v-col cols="6">
							<v-btn class="primary" tile elevation="0" width="100%">
								나의 메시지 불러오기
							</v-btn>
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
							<v-btn class="primary" tile elevation="0" width="80%" small>
								미리보기
							</v-btn>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" class="py-0">
							<div class="font-weight-bold body-2 my-2">발송 시간</div>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6">
							<v-btn class="primary" tile elevation="0" width="100%">
								즉시발송
							</v-btn>
						</v-col>
						<v-col cols="6">
							<v-btn color="primary" outlined tile elevation="0" width="100%">
								예약발송
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</form>
		</ValidationObserver>
	</div>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	export default {
		mixins: [VeeValidation],
		data() {
			return {
				promotion: '',
				byte_valid: false,
				text_byte: 0,
				limit_byte: 0,
				msg_title: '',
				msg_contents: '',
				promotion_byte: 0,
				msg_title_byte: 0,
				msg_contents_byte: 0,
			};
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
		},
	};
</script>

<style></style>
