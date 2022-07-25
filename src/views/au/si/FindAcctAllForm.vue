<template>
	<IndexPage>
		<template slot="top">
			<div class="mb-2">
				<div>이메일로 전송된 인증번호 입력 후 일치 시</div>
				<div>아이디 전체를 확인하실 수 있습니다.</div>
			</div>
		</template>
		<template slot="center">
			<ValidationObserver ref="observer">
				<form @submit.prevent="submit">
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

					<template v-if="isAuthNumber">
						<div class="primary lighten-3 black--text text-center my-3">
							<div class="white py-2 body-2">회원님의 아이디를 찾았습니다.</div>
							<div class="py-2">ab***ef</div>
							<div class="py-2">(가입일 : yyyy-mm-dd)</div>
							<div class="white py-2 body-2">
								아이디를 모두 확인하시려면 이메일인증 후 확인하실 수 있습니다.
							</div>
						</div>

						<v-btn
							color="primary"
							width="100%"
							large
							class="d-block primary"
							@click="$router.push({ name: 'SignInForm' })"
						>
							<div class="text-subtitle-1 white--text">로그인 하기</div></v-btn
						>
					</template>
				</form>
			</ValidationObserver>
		</template>
		<template v-if="isAuthNumber" slot="bottom">
			<div>
				<div class="d-inline-block mx-1">비밀번호 찾기</div>
				|
				<div class="d-inline-block mx-1">회원가입</div>
			</div>
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
		}),
		methods: {
			async submit() {
				const rslt = await this.$refs.observer.validate();
				if (rslt) {
					this.isAuthNumber = true;
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
