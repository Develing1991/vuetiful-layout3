<template>
	<div>
		<v-container class="px-0">
			<v-list class="mb-2 py-0" dense>
				<v-list-item>
					<v-row>
						<v-col
							cols="3"
							align-self="center"
							class="text-center font-weight-bold"
						>
							아이디
						</v-col>
						<v-col cols="9"> abcdefg </v-col>
					</v-row>
				</v-list-item>
				<!-- <v-divider /> -->
				<v-list-item>
					<v-row>
						<v-col
							cols="3"
							align-self="center"
							class="text-center font-weight-bold"
						>
							비밀번호
						</v-col>
						<v-col cols="1">
							<v-btn color="primary" outlined width="100%" small>재설정</v-btn>
						</v-col>
						<v-spacer />
					</v-row>
				</v-list-item>
				<v-divider class="my-4" />
				<v-list-item>
					<v-row>
						<v-col
							cols="3"
							align-self="center"
							class="text-center font-weight-bold"
						>
							사업자 번호
						</v-col>
						<v-col cols="9"> 111-00-12345 </v-col>
					</v-row>
				</v-list-item>
				<v-list-item>
					<v-row>
						<v-col
							cols="3"
							align-self="center"
							class="text-center font-weight-bold"
						>
							상호명
						</v-col>
						<v-col cols="9"> 꿀콘대박 </v-col>
					</v-row>
				</v-list-item>
				<v-list-item>
					<v-row>
						<v-col
							cols="3"
							align-self="center"
							class="text-center font-weight-bold"
						>
							사업자 구분
						</v-col>
						<v-col cols="9"> 법인 </v-col>
					</v-row>
				</v-list-item>
				<v-list-item>
					<v-row>
						<v-col
							cols="3"
							align-self="center"
							class="text-center font-weight-bold"
						>
							대표자
						</v-col>
						<v-col cols="9"> 홍길동 </v-col>
					</v-row>
				</v-list-item>

				<v-divider class="my-4" />

				<ValidationObserver ref="observer">
					<v-list-item>
						<v-row>
							<v-col cols="12" class="caption"> * 필수항목 </v-col>
						</v-row>
					</v-list-item>
					<v-list-item>
						<v-row>
							<v-col
								cols="3"
								align-self="center"
								class="text-center font-weight-bold"
							>
								* 담당자명
							</v-col>
							<v-col cols="9" class="py-0 mt-6">
								<ValidationProvider
									v-slot="{ errors }"
									name="담당자명"
									:rules="{
										required: true,
									}"
									><v-text-field
										v-model="mng_name"
										color="primary"
										placeholder="담당자명"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
						</v-row>
					</v-list-item>
					<v-list-item>
						<v-row>
							<v-col
								cols="3"
								align-self="center"
								class="text-center font-weight-bold"
							>
								* 휴대폰번호
							</v-col>
							<v-col cols="9" class="py-0 mt-6">
								<ValidationProvider
									v-slot="{ errors }"
									name="휴대폰번호"
									:rules="{
										required: true,
									}"
									><v-text-field
										v-model="mng_phone"
										color="primary"
										placeholder="휴대폰번호"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
						</v-row>
					</v-list-item>
					<v-list-item>
						<v-row>
							<v-col
								cols="3"
								align-self="center"
								class="text-center font-weight-bold"
							>
								이메일
							</v-col>
							<v-col cols="auto" align-self="center"> abcde@abcd.co.kr </v-col>
							<v-col cols="1" class="px-0">
								<v-btn color="primary" outlined width="100%" small>수정</v-btn>
							</v-col>
							<v-spacer />
						</v-row>
					</v-list-item>
					<v-list-item>
						<v-row>
							<v-col
								cols="3"
								align-self="center"
								class="text-center font-weight-bold"
							>
								직급
							</v-col>
							<v-col cols="9" class="py-0 mt-6">
								<ValidationProvider
									v-slot="{ errors }"
									name="직급"
									:rules="{
										required: true,
									}"
									><v-text-field
										v-model="mng_grade"
										color="primary"
										placeholder="직급"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
						</v-row>
					</v-list-item>
					<v-list-item>
						<v-row>
							<v-col
								cols="3"
								align-self="center"
								class="text-center font-weight-bold"
							>
								전화번호
							</v-col>
							<v-col cols="9" class="py-0 mt-6">
								<ValidationProvider
									v-slot="{ errors }"
									name="전화번호"
									:rules="{
										required: true,
									}"
									><v-text-field
										v-model="mng_tel"
										color="primary"
										placeholder="전화번호"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
						</v-row>
					</v-list-item>
					<v-divider class="my-4" />
					<v-list-item>
						<v-row>
							<v-col cols="12" class="caption"> 마케팅수신동의 </v-col>
							<v-col cols="12" class="caption">
								<li>광고성 정보 전송을 위한 개인정보수집이용 동의 (선택)</li>
							</v-col>
						</v-row>
					</v-list-item>
					<v-list-item>
						<v-row class="mx-4">
							<v-col cols="12" align-self="center" class="py-0 mt-3">
								<v-checkbox label="이벤트/쇼핑 혜택 SMS 수신 동의1" />
								<v-divider />
							</v-col>
							<v-col cols="12" align-self="center" class="py-0">
								<v-checkbox label="이벤트/쇼핑 혜택 SMS 수신 동의2" />
								<v-divider />
							</v-col>
							<v-col cols="12" class="my-1 caption">
								거래관련, 주요 회원 정책 변경 관련 주요 공지는 별도 동의없이
								SMS/이메일이 발송됩니다.
							</v-col>
						</v-row>
					</v-list-item>
					<v-divider class="my-4" />
					<v-list-item>
						<v-row>
							<v-col cols="12">
								<v-btn width="100%" class="primary" large>수정</v-btn>
							</v-col>
						</v-row>
					</v-list-item>
				</ValidationObserver>
				<div class="my-8"></div>
				<v-list-item>
					<v-row>
						<v-col
							cols="3"
							align-self="center"
							class="text-center font-weight-bold"
						>
							가입일
						</v-col>
						<v-col cols="9"> 2022-06-22 </v-col>
					</v-row>
				</v-list-item>
				<!-- <v-divider /> -->
				<v-list-item>
					<v-row>
						<v-col
							cols="3"
							align-self="center"
							class="text-center font-weight-bold"
						>
							회원탈퇴
						</v-col>
						<v-col cols="1">
							<v-btn color="primary" outlined width="100%" small>탈퇴</v-btn>
						</v-col>
						<v-spacer />
					</v-row>
				</v-list-item>
			</v-list>
		</v-container>
	</div>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	export default {
		mixins: [VeeValidation],
		data() {
			return {
				pass: null,
			};
		},
	};
</script>

<style></style>
