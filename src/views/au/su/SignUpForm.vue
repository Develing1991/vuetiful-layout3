<template>
	<IndexPage>
		<template slot="top">
			<v-card elevation="0" tile class="pa-0 ma-0" width="100%">
				<v-row justify="center" class="pb-2">
					<v-col cols="3">
						<span>
							<v-icon color="green darken-2">
								mdi-text-box-check-outline
							</v-icon>
							<div class="green--text darken-2">약관동의</div>
						</span>
					</v-col>
					<v-col cols="1">
						<span>
							<v-icon color="green darken-2"> mdi-chevron-right </v-icon>
						</span>
					</v-col>
					<v-col cols="3">
						<span>
							<v-icon color="green darken-2"> mdi-account-edit-outline </v-icon>
							<div class="green--text darken-2">회원정보입력</div>
						</span>
					</v-col>
					<v-col cols="1">
						<span>
							<v-icon> mdi-chevron-right </v-icon>
						</span>
					</v-col>
					<v-col cols="3">
						<span>
							<v-icon> mdi-account-check-outline</v-icon>
							<div>가입완료</div>
						</span>
					</v-col>
				</v-row>
				<v-divider />
			</v-card>
		</template>

		<template slot="center">
			<ValidationObserver ref="observer">
				<form @submit.prevent="authNumSubmit">
					<div class="ma-2 font-weight-bold">
						* 사업자 인증
						<span class="primary--text">(필수)</span>
					</div>
					<v-divider class="my-2" />
					<template v-if="!isSelfBiz">
						<v-row>
							<v-col cols="9" class="pb-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="사업자등록번호"
									:rules="{
										required: true,
										digits: 11,
									}"
								>
									<v-text-field
										v-model="bizNum"
										color="primary"
										label="사업자등록번호"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
							<v-col cols="3" class="pl-0 pb-0">
								<v-btn color="primary" width="100%" class="d-block primary">
									<div class="text-subtitle-1 white--text">인증</div></v-btn
								>
							</v-col>
						</v-row>
						<v-row class="grey--text caption">
							<v-col cols="12" class="pt-0">
								<ul>
									<li>
										하나의 사업자 번호로 여려 개의 계정 생성이 가능합니다.
									</li>
									<li>
										사업자 인증은 나이스신용정보를 통해서 처리되고 있습니다.
									</li>
									<li>
										나이스신용정보에 기업정보가 없거나 불확실할 경우 인증이
										불가할 수 있습니다.
										<span class="primary--text text-decoration-underline"
											>나이스신용정보에 사업자 등록하기</span
										>
									</li>
								</ul>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<ValidationProvider
									v-slot="{ errors }"
									name="상호명"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizName"
										color="primary"
										label="상호명"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>

								<ValidationProvider
									v-slot="{ errors }"
									name="대표자명"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizPerson"
										color="primary"
										label="대표자명"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
						</v-row>
						<div class="caption text-center">
							타인의 정보를 부정하게 사용하는 경우 그에 따른 법적 조치가 취해질
							수 있습니다. (3년 이하의 징역 또는 1천만원 이하의 벌금)
						</div>
						<v-divider class="my-2" />
						<li class="grey--text caption text-center">
							사업자등록번호 인증이 되지않을 경우 직접 입력해주세요.
							<v-btn small class="primary my-2" width="80%" elevation="0">
								<div
									class="black--text font-weight-bold"
									@click="isSelfBiz = true"
								>
									사업자등록번호 직접입력하기
								</div>
							</v-btn>
						</li>
					</template>
					<template v-else>
						<v-row class="pt-2">
							<v-col cols="12">
								<ValidationProvider
									v-slot="{ errors }"
									name="사업자등록번호"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizNum"
										color="primary"
										label="사업자등록번호 (-없이 입력해주세요.)"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
								<ValidationProvider
									v-slot="{ errors }"
									name="상호명"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizName"
										color="primary"
										label="상호명"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>

								<ValidationProvider
									v-slot="{ errors }"
									name="대표자명"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizPerson"
										color="primary"
										label="대표자명"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
								<v-btn
									class="primary my-2"
									tile
									width="100%"
									large
									@click="showSlide = true"
								>
									사업자등록사본 첨부하기
								</v-btn>
								<ul class="grey--text caption">
									<li>
										사업자등록증사본 파일은 pdf, jpg, png 형식의 3MB이하로 등록
										가능합니다.
									</li>
									<li>
										직접 입력하실 경우 회원가입 후 관리자 승인 절차가
										필요합니다.
									</li>
									<li class="text-decoration-underline">
										승인 처리는 영업일을 기준으로 1일 이내에 완료되며 회원가입
										완료 안내 메일이 발송됩니다
									</li>
								</ul>
							</v-col>
						</v-row>
					</template>
					<div class="ma-2 mt-10 font-weight-bold">
						* 회원정보입력
						<span class="primary--text">(필수)</span>
					</div>
					<v-divider class="my-2" />
					<template>
						<v-row>
							<v-col cols="9" class="pb-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="아이디"
									:rules="{
										required: true,
									}"
								>
									<v-text-field
										v-model="bizNum"
										color="primary"
										label="아이디"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
							<v-col cols="3" class="pl-0 pb-0">
								<v-btn color="primary" width="100%" class="d-block primary">
									<div class="text-subtitle-1 white--text">중복확인</div></v-btn
								>
							</v-col>
						</v-row>

						<v-row>
							<v-col cols="12" class="py-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="비밀번호"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizName"
										color="primary"
										label="비밀번호"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>

								<ValidationProvider
									v-slot="{ errors }"
									name="비밀번호 확인"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizPerson"
										color="primary"
										label="비밀번호 확인"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
								<ValidationProvider
									v-slot="{ errors }"
									name="담당자명"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizPerson"
										color="primary"
										label="담당자명"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="9" class="py-0">
								<ValidationProvider
									v-slot="{ errors }"
									name="이메일"
									:rules="{
										required: true,
									}"
								>
									<v-text-field
										v-model="bizNum"
										color="primary"
										label="이메일"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
									<div class="caption">
										<div>
											※ 아이디, 비밀전호 찾기 시 이메일로 인증번호가 발송됩니다.
										</div>
										<div>
											※ 인증번호는 메일 발송 후 600초 이내 입력해주세요.
										</div>
									</div>
								</ValidationProvider>
							</v-col>
							<v-col cols="3" class="pl-0 py-0">
								<v-btn color="primary" width="100%" class="d-block primary">
									<div class="text-subtitle-1 white--text">인증</div></v-btn
								>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<ValidationProvider
									v-slot="{ errors }"
									name="휴대폰번호"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizName"
										color="primary"
										label="휴대폰번호 (-없이 입력해주세요.)"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
						</v-row>
					</template>
					<div class="ma-2 mt-10 font-weight-bold">
						* 회원정보입력
						<span class="primary--text">(필수)</span>
					</div>
					<v-divider class="my-2" />
					<template>
						<v-row>
							<v-col cols="12">
								<ValidationProvider
									v-slot="{ errors }"
									name="직급"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizName"
										color="primary"
										label="직급"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>

								<ValidationProvider
									v-slot="{ errors }"
									name="전화번호"
									:rules="{
										required: true,
										digits: 6,
									}"
								>
									<v-text-field
										v-model="bizPerson"
										color="primary"
										label="전화번호"
										prepend-inner-icon="mdi-account-outline"
										outlined
										dense
										:error-messages="`${errors}`"
									/>
								</ValidationProvider>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<!-- <v-btn class="primary" width="100%" tile large  type="submit"> -->
								<v-btn
									class="primary"
									width="100%"
									tile
									large
									@click="$router.push({ name: 'SignUpRsltPage' })"
								>
									회원가입
								</v-btn>
							</v-col>
						</v-row>
					</template>
				</form>
			</ValidationObserver>
			<BottomSlideModal :show-slide="showSlide" @close="showSlide = false">
				<v-sheet>
					<div class="px-6 py-3">
						<v-list outlined>
							<v-list-item>
								<v-list-item-content class="pa-0">
									<v-list-item-title
										class="font-weight-bold blue--text mb-2 text-center"
										@click="showSlide = false"
										>사진찍기</v-list-item-title
									>
								</v-list-item-content>
							</v-list-item>
							<v-divider />
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
		</template>
		<template slot="bottom"> </template>
	</IndexPage>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	import IndexPage from '@/views/au/su/IndexPage.vue';
	import BottomSlideModal from '@/components/pop/BottomSlideModal.vue';
	export default {
		components: {
			IndexPage,
			BottomSlideModal,
		},
		mixins: [VeeValidation],
		data: () => ({
			isSelfBiz: false,
			bizNum: null,
			bizName: null,
			bizPerson: null,
			showSlide: false,
		}),
		methods: {
			submit() {
				console.log(this.svrcTrmsAll);
				this.$refs.observer.validate();
				console.log(this.$refs.observer.validate());
			},

			clear() {
				this.value = '';
				this.$refs.observer.reset();
			},
		},
	};
</script>

<style></style>
