<template>
	<IndexPage>
		<template slot="top">
			<div class="mb-2">
				<div>이메일로 전송된 인증번호 입력 후 일치 시</div>
				<div>비밀번호를 다시 설정할 수 있습니다.</div>
			</div>
		</template>
		<template slot="center">
			<ValidationObserver ref="observer">
				<form @submit.prevent="authNumSubmit">
					<ValidationProvider
						v-slot="{ errors }"
						name="이메일 인증번호"
						:rules="{
							required: true,
							digits: 6,
						}"
					>
						<v-row>
							<v-col cols="9" class="pb-0">
								<v-text-field
									v-model="auth_number"
									color="primary"
									label="이메일 인증번호"
									prepend-inner-icon="mdi-account-outline"
									outlined
									dense
									:error-messages="`${errors}`"
								/>
							</v-col>
							<v-col cols="3" class="pl-0 pb-0">
								<v-btn
									color="primary"
									width="100%"
									large
									class="d-block primary"
									type="submit"
								>
									<div class="text-subtitle-1 white--text">확인</div></v-btn
								>
							</v-col>
						</v-row>
					</ValidationProvider>
				</form>
			</ValidationObserver>
			<ValidationObserver ref="observer2">
				<form v-if="isAuthNumber" class="mt-4" @submit.prevent="passWordSubmit">
					<template>
						<div class="black--text text-center mb-4">
							<div class="white pb-1 body-2">인증되었습니다.</div>
							<div class="white pb-1 body-2">고객님의 안전한 쇼핑을 위해</div>
							<div class="white pb-1 body-2">
								비밀번호를 다시 설정해 주세요.
							</div>
						</div>
						<ValidationProvider
							v-slot="{ errors }"
							name="신규 비밀번호"
							:rules="{
								required: true,
								password_valid: true,
							}"
						>
							<v-text-field
								v-model="pass1"
								color="primary"
								label="신규 비밀번호"
								prepend-inner-icon="mdi-lock-outline"
								:append-icon="
									pass1.length > 0
										? showPass1
											? 'mdi-eye'
											: 'mdi-eye-off'
										: ''
								"
								:type="showPass1 ? 'text' : 'password'"
								outlined
								dense
								:error-messages="`${errors}`"
								@click:append="showPass1 = !showPass1"
							/>
						</ValidationProvider>
						<ValidationProvider
							v-slot="{ errors }"
							name="신규 비밀번호 확인"
							:rules="{
								required: true,
								confirmed: '신규 비밀번호',
							}"
						>
							<v-text-field
								v-model="pass2"
								color="primary"
								label="신규 비밀번호 확인"
								prepend-inner-icon="mdi-lock-outline"
								:append-icon="
									pass2.length > 0
										? showPass2
											? 'mdi-eye'
											: 'mdi-eye-off'
										: ''
								"
								:type="showPass2 ? 'text' : 'password'"
								outlined
								dense
								:error-messages="`${errors}`"
								@click:append="showPass2 = !showPass2"
							/>
						</ValidationProvider>

						<v-btn
							color="primary"
							width="100%"
							large
							class="d-block primary"
							type="submit"
						>
							<div class="text-subtitle-1 white--text">확인</div></v-btn
						>
					</template>
				</form>
			</ValidationObserver>
		</template>
		<template slot="bottom">
			<!-- <template v-if="isAuthNumber" slot="bottom"> -->
			<!-- <div>
				<div class="d-inline-block mx-1">비밀번호 찾기</div>
				|
				<div class="d-inline-block mx-1">회원가입</div>
			</div> -->
		</template>
	</IndexPage>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	import IndexPage from '@/views/au/si/IndexPage.vue';
	export default {
		components: {
			IndexPage,
		},
		mixins: [VeeValidation],
		data: () => ({
			auth_number: '',
			isAuthNumber: false,
			pass1: '',
			pass2: '',
			showPass1: false,
			showPass2: false,
		}),
		methods: {
			async authNumSubmit() {
				const rslt = await this.$refs.observer.validate();
				console.log('인증번호 서브밋');
				if (rslt) {
					this.isAuthNumber = true;
				}
			},
			async passWordSubmit() {
				const rslt = await this.$refs.observer2.validate();
				console.log('패스워드 서브밋');
				if (rslt) {
					alert('비번 변경~~!!');
					//this.isAuthNumber = true;
					this.$router.push({ name: 'SignInForm' });
				}
			},
			clear() {
				this.value = '';
				this.$refs.observer.reset();
			},
		},
	};
</script>

<style></style>
