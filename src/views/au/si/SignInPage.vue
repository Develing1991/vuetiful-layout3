<template>
	<v-container class="mt-3">
		<v-row>
			<v-col cols="12">
				<ValidationObserver ref="observer">
					<form @submit.prevent="submit">
						<ValidationProvider
							v-slot="{ errors }"
							name="아이디"
							:rules="{
								required: true,
							}"
						>
							<v-text-field
								v-model="member_id"
								color="primary"
								label="아이디"
								prepend-inner-icon="mdi-account-outline"
								outlined
								dense
								:error-messages="`${errors}`"
							/>
						</ValidationProvider>
						<ValidationProvider
							v-slot="{ errors }"
							name="비밀번호"
							:rules="{
								required: true,
							}"
						>
							<v-text-field
								v-model="password"
								color="primary"
								label="비밀번호"
								prepend-inner-icon="mdi-lock-outline"
								:append-icon="
									password.length > 0
										? showPass
											? 'mdi-eye'
											: 'mdi-eye-off'
										: ''
								"
								:type="showPass ? 'text' : 'password'"
								outlined
								dense
								:error-messages="`${errors}`"
								@click:append="showPass = !showPass"
							/>
						</ValidationProvider>
						<v-checkbox
							v-model="emailSave"
							label="아이디 저장"
							color="primary"
							value="Y"
							class="mt-0 mx-1 d-inline-block"
							hide-details
						/>
						<v-checkbox
							v-model="autoLogin"
							label="자동로그인"
							color="primary"
							value="Y"
							class="mt-0 mx-1 d-inline-block"
							hide-details
						/>
						<v-btn
							color="primary"
							width="100%"
							large
							class="mt-5 d-block primary"
							type="submit"
						>
							<div class="text-subtitle-1 white--text">로그인</div></v-btn
						>
						<v-btn
							width="100%"
							large
							color="primary"
							outlined
							class="mt-5 d-block"
							@click="clear"
						>
							<div class="text-subtitle-1 primary--text">회원가입</div></v-btn
						>
					</form>
					<div class="text-center my-3">
						<div class="d-inline-block mx-1">아이디 찾기</div>
						|
						<div class="d-inline-block mx-1">비밀번호 찾기</div>
					</div>
				</ValidationObserver>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import VeeValidation from '@/mixins/VeeValidation.vue';
	export default {
		mixins: [VeeValidation],
		data: () => ({
			value: '',
			member_id: '',
			password: '',
			showPass: true,
			emailSave: false,
			autoLogin: false,
		}),
		methods: {
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
